import React from "react";
import RecipeDetails from "./RecipeDetails";
import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

function Recipes({ recipe }) {
  const [show, setShow] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { label, calories, url, image, ingredients } = recipe.recipe;

  const favIcon = () => {
    if (favorite === true) {
      setFavorite(false);
    } else if (favorite === false) setFavorite(true);
  };

  return (
    <div className="recipe">
      <h1>{label}</h1>
      <div className="fav-icon" onClick={favIcon}>
        {favorite === false ? <HiOutlineHeart /> : <HiHeart />}
      </div>
      {/* <p>Calories-{calories}</p> */}
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>ingredients</button>
      {show && <RecipeDetails ingredients={ingredients}></RecipeDetails>}
    </div>
  );
}

export default Recipes;

// import React from "react";

// const Recipe = ({ title, calories, image, ingredients }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <ol>
//         {ingredients.map((ingredient) => (
//           <li>{ingredient.text}</li>
//         ))}
//       </ol>
//       <p>{calories}</p>
//       <img src={image} alt="" />
//     </div>
//   );
// };
//
