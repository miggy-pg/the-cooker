import React from "react";

export function FoodCard() {
  return (
    <div className="tm-list-item">
      <img
        src="img/iced-americano.png"
        alt="Image"
        className="tm-list-item-img"
      />
      <div className="tm-black-bg tm-list-item-text">
        <h3 className="tm-list-item-name">
          Iced Americano
          <span className="tm-list-item-price">$10.25</span>
        </h3>
        <p className="tm-list-item-description">
          Here is a short description for the first item. Wave Cafe Template is
          provided by Tooplate.
        </p>
      </div>
    </div>
  );
}
