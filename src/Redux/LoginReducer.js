import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
const userDetails = localStorage.getItem("user");
const user = userDetails && jwtDecode(userDetails);
const tokenPresent = !!token && !!user;

const initialState = {
  isLoggedIn: true,
  userDetails: user,
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
