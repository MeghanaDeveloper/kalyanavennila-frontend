import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
   profileProgress: 0,
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
    setProfileProgress: (state, action) => {
      console.log("get profile", action);
      state.isAuthenticated = true;
      state.profileProgress = action.payload 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = {};
      //state.profileProgress=0
      localStorage.removeItem("loginToken");
    },
  },
});

export const { loginUser, setUpdateProfile, setGetUserDetails, setProfileProgress, logout } =
  authSlice.actions;

export default authSlice.reducer;