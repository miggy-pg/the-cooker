import React from "react";
import { Tags } from "../../components/Common/Tags";
import { FoodList } from "../../components/Management/FoodList";

export function RightBar() {
  return (
    <div className="tm-right">
      <main className="tm-main">
        <div id="drink" className="tm-page-content">
          <Tags></Tags>

          <FoodList></FoodList>
        </div>
      </main>
    </div>
  );
}
