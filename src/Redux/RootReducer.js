import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./CartReducer";
import loginSlice from "./LoginReducer";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  login: loginSlice.reducer,
});

export default rootReducer;
