import { useContext } from "react";
import { RecipeContext } from "../../../contexts/recipeProvider";
import { NavCard } from "../NavCard";

export function NavBar() {
  const { recipes, isLoading, handleSelectedTag } = useContext(RecipeContext);
  return (
    <nav className="tm-site-nav">
      <ul className="tm-site-nav-ul">
        {!isLoading &&
          recipes
            .reduce((acc, recipe) => {
              recipe.tag.forEach((tag) => {
                if (!acc.includes(tag)) {
                  acc.push(tag);
                }
              });
              return acc;
            }, [])
            .map((tag) => (
              <NavCard
                key={tag}
                tag={tag}
                handleSelectedTag={handleSelectedTag}
              />
            ))}
      </ul>
    </nav>
  );
}
