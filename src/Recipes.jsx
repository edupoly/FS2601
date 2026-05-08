import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Recipes() {
  var [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRecipes([...data.recipes]);
      })
      .catch(() => {});
  }, []);
  var navigate = useNavigate();
  function abc() {
    navigate("/counter", { state: { speasd: "praveen" } });
  }
  return (
    <div className="border border-4 border-warning m-2 p-2">
      <h1>Recipes</h1>
      <button
        onClick={() => {
          abc();
        }}
      >
        Just COunter
      </button>
      <div className="d-flex flex-wrap">
        <ul className="w-50">
          {recipes?.map((recipe) => {
            return (
              <li>
                <Link to={`recipeDetails/${recipe.id}`} state={recipe}>
                  {recipe.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="w-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
