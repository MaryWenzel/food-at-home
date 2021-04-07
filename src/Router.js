import React from "react";
import { Switch, Route } from "react-router";
import RecipeSearch from "./components/RecipeSearch";
import Ingredients from "./components/Ingredients";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/search" component={RecipeSearch}></Route>
      <Route path="/ingredients" component={Ingredients}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
}
