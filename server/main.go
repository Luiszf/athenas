package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"

	routing "github.com/qiangxue/fasthttp-routing"
	"github.com/valyala/fasthttp"

	"github.com/jackc/pgx/v5"
)

var (
	addr     = flag.String("127.0.0.1", ":8080", "TCP address to listen to")
	compress = flag.Bool("compress", false, "Whether to enable transparent response compression")
)

var connection *pgx.Conn

type test struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func main() {

	var err error
	connection, err = pgx.Connect(context.Background(), "postgres://postgres:postgres@localhost:5432/postgres")
	if err != nil {
		fmt.Print(err)
	}

	flag.Parse()

	router := routing.New()

	api := router.Group("/api")

	api.Get("/show", listTest)
	api.Post("/insert", insertTest)

	router.Get("/", func(c *routing.Context) error {
		fmt.Fprint(c, "ola bom dia")
		return nil
	})

	if err := fasthttp.ListenAndServe(*addr, router.HandleRequest); err != nil {
		log.Fatalf("Error in ListenAndServe: %v", err)
	}

}
func listTest(ctx *routing.Context) error {
	ctx.SetContentType("application/json")

	rows, _ := connection.Query(context.Background(), "select * from test")
	for rows.Next() {
		x := new(test)
		err := rows.Scan(&x.Id, &x.Name)
		if err != nil {
			return err
		}
		json.NewEncoder(ctx).Encode(x)
	}

	return rows.Err()
}
func insertTest(ctx *routing.Context) error {
	ctx.SetContentType("application/json")

	name := string(ctx.FormValue("name"))
	id := string(ctx.FormValue("id"))

	_, err := connection.Exec(context.Background(), "insert into test(id , name) values($1, $2)", id, name)

	return err
}
