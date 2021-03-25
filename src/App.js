import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./Router";
import "./App.css";
// import Axios from "axios";
// import Recipes from "./components/Recipes";
// import RecipeSearch from "./components/RecipeSearch";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
