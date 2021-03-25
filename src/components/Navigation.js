import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar postition="relative">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: "1" }}>
          VEG-@-Home
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/search">Recipe Search</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/ingredient">Ingredient Search</Link>
          </li>
          {/* <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/login");
            }}
          >
            Logout
          </li> */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
