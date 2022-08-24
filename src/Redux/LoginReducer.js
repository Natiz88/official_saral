import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const token = localStorage.getItem("token");
const userDetails = localStorage.getItem("user");
const tokenPresent = !!token;
console.log("userDetails", userDetails);

const initialState = {
  isLoggedIn: tokenPresent,
  userDetails: userDetails?.data,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    updateUser(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
