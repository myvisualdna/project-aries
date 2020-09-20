import React, { useState, useEffect } from "react";
import "./styles/payment.scss";
import { useSelector } from "react-redux";
import CheckoutProduct from "./checkoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

function Payment() {
  //Selector for Login
  const loginSelector = useSelector((state) => state.LoginReducer.user);
  //Selector for Cart
  const basketSelector = useSelector((state) => state.CartReducer.basket);
  //History from react router
  const history = useHistory();

  //Subtotal Calculator
  let content = basketSelector;
  let subtotalCalculated = content.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  console.log(subtotalCalculated);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="checkout">{basketSelector?.length} items</Link>)
        </h1>

        {/*Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>

          <div className="payment__address">
            <p>{loginSelector?.email}</p>
            <p>1234 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/*Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basketSelector.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic here */}
            <form>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={subtotalCalculated}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>

              {/* Errors */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
