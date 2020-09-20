import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles/subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function Subtotal() {
  const history = useHistory();
  //Selector for Cart
  const basketSelector = useSelector((state) => state.CartReducer.basket);

  //Subtotal Calculator
  let content = basketSelector;
  let subtotalCalculated = content.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  console.log(subtotalCalculated);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basketSelector?.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotalCalculated}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
