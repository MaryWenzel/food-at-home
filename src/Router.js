import React from "react";
import { Switch, Route } from "react-router";
// import Recipes from "./components/Recipes";
import RecipeSearch from "./components/RecipeSearch";
import Ingredients from "./components/Ingredients";
import Test from "./components/Test";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

export default function Router() {
  return (
    <Switch>
      <Route path="/search" component={RecipeSearch}></Route>
      <Route exact-path="/"></Route>
      <Route path="/ingredient" component={Ingredients}></Route>
      <Route path="/test" component={Test}></Route>
    </Switch>
  );
}
