import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const token = localStorage.getItem("token");
const tokenPresent = !!token;
console.log("token", tokenPresent);

const initialState = {
  isLoggedIn: tokenPresent,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state) {
      console.log("logout");
      state.isLoggedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
