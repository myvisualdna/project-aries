import React from "react";
import { useDispatch } from "react-redux";
import "./styles/product.scss";
import AddToBasket from "./redux/actions/basketAction";

function Product({ id, title, image, price, rating }) {
  //1. We collect all the props we need in a single const
  const MyInfo = { id, title, image, price, rating };

  //2. We define useDispatch
  const dispatch = useDispatch();
  //3. We define the function that will dispatch the action(also, we pass props to that action "addToBasket")
  const takeItem = (MyInfo) => dispatch(AddToBasket(MyInfo));

  //4. We define the method that will send the action to the reducer (when "onClick")
  const addItem = () => {
    takeItem(MyInfo);
  };

  return (
    <div className="product">
      <div className="product__info">
        {title}
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐️</span>
            ))}
        </div>
      </div>

      <img src={image} alt="product-img" />

      <button onClick={addItem}>Add to Cart</button>
    </div>
  );
}

export default Product;
