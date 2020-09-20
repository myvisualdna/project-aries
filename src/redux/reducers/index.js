import { combineReducers } from "redux";
import CartReducer from "./cartReducer";
import LoginReducer from "./loginReducer";

//El rootReducer va a ser la suma de todos los reducer combinados

const rootReducer = combineReducers({
  CartReducer,
  LoginReducer,
});

export default rootReducer;
