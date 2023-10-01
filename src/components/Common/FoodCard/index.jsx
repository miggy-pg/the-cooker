export function FoodCard({ recipe }) {
  return (
    <div className="tm-list-item">
      <img src="" alt="Image" className="tm-list-item-img" />
      {/* <img src={recipe.image} alt="Image" className="tm-list-item-img" /> */}
      <div className="tm-black-bg tm-list-item-text">
        <h3 className="tm-list-item-name">
          The Dessert
          {/* {recipe.name} */}
          <span className="tm-list-item-price">$100</span>
          {/* <span className="tm-list-item-price">${recipe.price}</span> */}
        </h3>
        <p className="tm-list-item-description">Lorem ipsum</p>
        {/* <p className="tm-list-item-description">{recipe.description}</p> */}
      </div>
    </div>
  );
}
