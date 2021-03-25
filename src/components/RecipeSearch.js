import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Recipes from "./components/Recipes";
import Axios from "axios";
import Recipes from "./Recipes";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "841d04fe";
  const APP_KEY = "79884b7e38bfe2526ed39804a2691243";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   getRecipes();
  // }, [query]);

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Search</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          onChange={onChange}
          value={query}
        ></input>
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipes key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  //   console.log(search);
  // };

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  // return (
  //   // <div className="App">
  //   //   <BrowserRouter>
  //   //     <Navigation />
  //   //   </BrowserRouter>
  //   // </div>

  //   <div className="App">
  //     <Navigation />
  //     <form onSubmit={getSearch} className="search-form">
  //       <input
  //         className="search-bar"
  //         type="text"
  //         value={search}
  //         onChange={updateSearch}
  //       ></input>
  //       <button className="search-button" type="submit">
  //         Search
  //       </button>
  //     </form>
  //     <div className="recipes">
  //       {recipes.map((recipe) => (
  //         <Recipes
  //           key={recipe.recipe.label}
  //           title={recipe.recipe.label}
  //           calories={recipe.recipe.calories}
  //           image={recipe.recipe.image}
  //           ingredients={recipe.recipe.ingredients}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default RecipeSearch;
