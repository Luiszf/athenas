const postdata = {
  thumbnail:
    "https://imgs.search.brave.com/cHWUyGOQN0bk6dON00gjiu7xitUB6OWV9rEDsUO7UkI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUwL2Fj/L2Y5LzUwYWNmOThi/MDU2YzE4ZWEzYWFh/NjMwNDJmZTE2Mzk5/LmpwZw",
  title: "Sample Title",
  description: "This is a sample description.",
  published_date: "2022-01-01T12:00:00Z",
  visualizations: "12345",
  profile: {
    name: "John Doe",
    profile_picture:
      "https://yt3.ggpht.com/ytc/AIdro_kqlkdf3hJeqc5pUYGCAHhremNYk2Iy-ZTHXoK1Pw=s68-c-k-c0x00ffffff-no-rj",
  },
};

import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  profilePicture: {
    width: "2rem",
    height: "2rem",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "white",
    borderRadius: "100%",
    padding: "2px",
    margin: "0.125rem",
  },
  header: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    fontSize: "16px",
  },
  title: {
    margin: "0px",
  },
  profile: {
    color: "blueviolet",
  },
  image: {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(to top, black, transparent),url(${postdata.thumbnail})`,
    height: "25rem",
    width: "100vw",
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'end',
    position: 'static',
    padding: '1rem'
  },
  button : {
    paddingHorizontal: '0.5rem'
  }
});

export default function Post() {
  return (
    <>
      <div {...stylex.props(styles.header)}>
        <img
          src={postdata.profile.profile_picture}
          alt="Profile picture"
          {...stylex.props(styles.profilePicture)}
        />
        <div>
          <h3 {...stylex.props(styles.title)}>{postdata.title}</h3>
          <p {...stylex.props(styles.title, styles.profile)}>
            {postdata.profile.name}
          </p>
        </div>
      </div>
      <div {...stylex.props(styles.image)} >
       <div {...stylex.props(styles.buttonContainer)}>
        <div {...stylex.props(styles.button)}>like</div>
        <div {...stylex.props(styles.button)}>comments</div>
        <div {...stylex.props(styles.button)}>share</div>
      </div>
      </div>
    </>
  );
}
