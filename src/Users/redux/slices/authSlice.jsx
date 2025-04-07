import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuthenticated: !!localStorage.getItem("loginToken"),
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login", action);
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setUpdateProfile: (state, action) => {
      console.log("update", action);
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setGetUserDetails: (state, action) => {
      console.log("get", action);
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = {};
      localStorage.removeItem("loginToken");
    },
  },
});

export const { loginUser, setUpdateProfile, setGetUserDetails, logout } =
  authSlice.actions;

export default authSlice.reducer;
