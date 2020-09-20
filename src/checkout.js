import React from "react";
import "./styles/checkout.scss";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutProduct";
import { useSelector } from "react-redux";

function Checkout() {
  //Selector for Login
  const loginSelector = useSelector((state) => state.LoginReducer.user);
  //Selector for Cart
  const basketSelector = useSelector((state) => state.CartReducer.basket);

    //Log in component
    let userEmail = "";
    if (loginSelector) {
      userEmail = 
      <h4>Welcome back, {loginSelector.email}</h4>;
    } else {
      userEmail = <h4>User is logged out</h4>;
    }


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkoutAd"
        />

        <div>
          {userEmail}
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {/* For every item added to basket, we send props to checkout product that display that item in the cart */}
          {basketSelector.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* Checkout Product */}
          {/* Checkout Product */}
          {/* Checkout Product */}
          {/* Checkout Product */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
