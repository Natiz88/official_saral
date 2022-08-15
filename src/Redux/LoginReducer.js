import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      return (state.isLoggedIn = true);
    },
    logout(state) {
      console.log("logout");
      state.isLoggedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
