import SlideButton from "../../Common/SlideButton/";
// import { useContext } from "react";
// import { FoodCard } from "../../Common/FoodCard";
// import { RecipeContext } from "../../../contexts/recipeProvider";

export function FoodList() {
  // const { recipes, isLoading, tag } = useContext(RecipeContext);
  return (
    <div id="cold" className="tm-tab-content">
      <div className="tm-list">
        <SlideButton
          mainText="Slide me"
          overlayText="T E S T"
          classList="test-slide-but"
          overlayClassList="test-overlay"
          caretClassList="test-caret"
          delta={10}
          minSlideVelocity={0.3}
          caret={null}
          minSlideWidth={0.1}
          onSlideDone={() => console.log("Done!")}
        />
        {/* <FoodCard /> */}
        {/* {!isLoading &&
          recipes.map(
            (recipe) =>
              recipe.tag.includes(tag || "Greek") && (
                <FoodCard key={recipe.id} recipe={recipe} />
              )
          )} */}
      </div>
    </div>
  );
}
