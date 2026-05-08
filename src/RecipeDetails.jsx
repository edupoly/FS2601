import React from "react";
import { useLocation } from "react-router-dom";

function RecipeDetails() {
  var { state: recipe } = useLocation();
  console.log(recipe);
  return (
    <div className="border border-2 m-2 p-2">
      <h1> {recipe.name} RecipeDetails</h1>
      <img src={recipe.image} width="200px" alt="" />
    </div>
  );
}

export default RecipeDetails;
