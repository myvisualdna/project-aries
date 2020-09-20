import React from "react";
import { useDispatch } from "react-redux";
import "./styles/checkoutProduct.scss";
import { useSelector } from "react-redux";
import RemoveItem from "./redux/actions/removeItem";

//This the component displayed on
function CheckoutProduct({ id, title, image, price, rating }) {
  //We define the state Selector
  const basketSelector = useSelector((state) => state.CartReducer.basket);

    //1. We collect all the props we need in a single const
  const DaData = { id, title, image, price, rating };

    //2. We define useDispatch
  const dispatch = useDispatch();
    //3. We define the function that will dispatch the action(also, we pass props to that action "RemoviItem")
  const RemoveMethod = (DaData) => dispatch(RemoveItem(DaData));

    //4. We define the method that will send the action to the reducer (when "onClick")
  const RemoveAction = () => {
    RemoveMethod(DaData);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="article-im" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img">⭐️</span>
            ))}
        </div>
        <button onClick={RemoveAction}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
