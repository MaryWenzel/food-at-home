import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" style={{ backgroundColor: "#d794ac" }}>
      <Toolbar style={{ height: "10vh" }}>
        <Typography
          className="food-at-home"
          variant="h5"
          style={{
            flexGrow: "3",
            fontSize: 45,
            letterSpacing: 10,
            fontWeight: 800,
          }}
        >
          Food-@-Home
        </Typography>
        <div className="nav-buttons">
          <Button className="nav-button" variant="contained" size="large">
            <Link className={classes.link} to="/search">
              Recipe Search
            </Link>
          </Button>
          <Button className="nav-button" variant="contained" size="large">
            <Link className={classes.link} to="/ingredients">
              Ingredient Search
            </Link>
          </Button>
          <Button className="nav-button" variant="contained" size="large">
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </Button>

          {/* <li className="nav-list-item">
              <Link to="/ingredients">Ingredient Search</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/login">Login</Link>
            </li> */}
          {/* <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/login");
            }}
            >
            Logout
          </li> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
