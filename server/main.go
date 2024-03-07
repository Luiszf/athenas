package main

import (
	"context"
	"flag"
	"fmt"
	"log"

	"github.com/valyala/fasthttp"

	"github.com/jackc/pgx/v5"
)

var (
	addr     = flag.String("127.0.0.1", ":8080", "TCP address to listen to")
	compress = flag.Bool("compress", false, "Whether to enable transparent response compression")
)

type test struct {
	id   int32
	name string
}

func main() {

	flag.Parse()

	h := requestHandler
	if *compress {
		h = fasthttp.CompressHandler(h)
	}

	if err := fasthttp.ListenAndServe(*addr, h); err != nil {
		log.Fatalf("Error in ListenAndServe: %v", err)
	}

}
func requestHandler(ctx *fasthttp.RequestCtx) {
	switch string(ctx.Path()) {
	case "/insert":
		err := insertTest(ctx, test{1, "tentativa"})
		if err != nil {
			fmt.Fprintf(ctx, "triste, luis!\n\n")
		}
	case "/show":
		err := listTest(ctx)
		if err != nil {
			fmt.Fprintf(ctx, "triste, luis!\n\n")
		}
	default:
		fmt.Fprintf(ctx, "Hello, luis!\n\n")
	}
}
func listTest(ctx *fasthttp.RequestCtx) error {
	connection, _ := pgx.Connect(context.Background(), "postgres://postgres:postgres@localhost:5432/postgres")
	rows, _ := connection.Query(context.Background(), "select * from test")

	fmt.Fprintf(ctx, "mais ou menos")
	for rows.Next() {
		var id int32
		var name string
		err := rows.Scan(&id, &name)
		if err != nil {
			return err
		}
		fmt.Fprintf(ctx, "%d. %s\n mais ou menos", id, name)

	}

	return rows.Err()
}
func insertTest(ctx *fasthttp.RequestCtx, test test) error {
	fmt.Fprint(ctx, "tentando inserir")
	connection, _ := pgx.Connect(context.Background(), "postgres://postgres:postgres@localhost:5432/postgres")
	rows, _ := connection.Query(context.Background(), "insert into test(id, name) values($1, $2)", test.id, test.name)

	return rows.Err()
}
