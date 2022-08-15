import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./CartReducer";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export default rootReducer;
