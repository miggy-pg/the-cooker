import React, { useContext } from "react";
import { NavBar } from "../components/Common/NavBar";
import { LeftBar } from "../containers/LeftBar";
import { RightBar } from "../containers/RightBar";
import { RecipeContext } from "../contexts/recipeProvider";

export default function Homepage() {
  const recipe = useContext(RecipeContext);

  return (
    <div className="tm-container">
      <div className="tm-row">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
