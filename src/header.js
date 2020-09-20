import React from "react";
import "./styles/header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "./firebase.js";

function Header() {
  //Selector for Login
  const loginSelector = useSelector((state) => state.LoginReducer.user);

  //Selector for Cart
  const basketSelector = useSelector((state) => state.CartReducer.basket);
  console.log(basketSelector?.length);

  //Log in component
  let userLogged = "";
  let userEmail = "Guest";
  if (loginSelector) {
    userLogged = "Log out";
    userEmail = loginSelector.email;
  } else {
    userLogged = "Log In";
  }

  const handleAuthentication = () => {
    if (loginSelector) {
      auth.signOut();
    } else {
      console.log("You are logged out");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="header-logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <Link to={!loginSelector && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {userEmail}</span>
            <span className="header__optionLineTwo">{userLogged}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basketSelector?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
