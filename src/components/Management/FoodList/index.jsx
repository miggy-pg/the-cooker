import { useContext } from "react";
import { FoodCard } from "../../Common/FoodCard";
import { RecipeContext } from "../../../contexts/recipeProvider";

export function FoodList() {
  const { recipes, isLoading, tag } = useContext(RecipeContext);
  return (
    <div id="cold" className="tm-tab-content">
      <div className="tm-list">
        {!isLoading &&
          recipes.map(
            (recipe) =>
              recipe.tag.includes(tag || "Greek") && (
                <FoodCard key={recipe.id} recipe={recipe} />
              )
          )}
      </div>
    </div>
  );
}
