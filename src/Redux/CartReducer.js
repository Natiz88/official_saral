import { createSlice } from "@reduxjs/toolkit";
import { links } from "./../components/Links";

const initialState = {
  links: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const obj = action.payload;
      return { ...state, cart: [...state.cart, obj] };
    },
    removeFromCart(state) {
      return { num: state.num - 1 };
    },
    addCategories(state, action) {
      console.log("cat", action.payload);
      state.links = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
