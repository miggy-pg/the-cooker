import React from "react";
import { FoodCard } from "../../Common/FoodCard";

export function FoodList() {
  return (
    <div id="cold" className="tm-tab-content">
      <div className="tm-list">
        <FoodCard></FoodCard>
      </div>
    </div>
  );
}
