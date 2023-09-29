import React, { useContext } from "react";
import { NavCard } from "../NavCard";
import { RecipeContext } from "../../../contexts/recipeProvider";

export function NavBar() {
  const { recipes, isLoading, error } = useContext(RecipeContext);
  return (
    <nav className="tm-site-nav">
      <ul className="tm-site-nav-ul">
        {!isLoading &&
          console.log(
            recipes
              .map((recipe) => recipe.tag)
              .reduce((acc, recipe) => {
                recipe.map((el) => {
                  if (!acc.includes(el)) {
                    return [...acc, el];
                  }
                });
              }, [])
          )}
      </ul>
    </nav>
  );
}
// recipes.reduce((acc, recipe) => {
//   console.log(recipe.tag);
//   recipe.tag.map((el) => {
//     recipe.tag.includes(el);
//     return [...acc, el];
//   });
// })}
