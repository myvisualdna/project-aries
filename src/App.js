import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout";
import Login from "./login";
import { auth } from "./firebase.js";
import LoginAction from "./redux/actions/loginAction";
import LogoutAction from "./redux/actions/logoutAction";
import Payment from "./payment";

function App() {
  //Setup for Redux reducers
  const dispatch = useDispatch();
  const LoginDispatch = (authUser) => dispatch(LoginAction(authUser));
  const LogoutDispatch = () => dispatch(LogoutAction());

  //Only run once when app component loads
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        LoginDispatch(authUser);
      } else {
        console.log("Now You are logged out");
        //the user is logged out
        LogoutDispatch();
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
