import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
   profileProgress: 0,
   allUserDetails:[],
  isAuthenticated: !!localStorage.getItem("loginToken"),
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => { 
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setUpdateProfile: (state, action) => {
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setGetUserDetails: (state, action) => {
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setProfileProgress: (state, action) => {
      state.isAuthenticated = true;
      state.profileProgress = action.payload 
    },
    setAllUserDetails: (state, action) => {
      state.isAuthenticated = true;
      state.allUserDetails = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = {};
      //state.profileProgress=0
      localStorage.removeItem("loginToken");
    },
  },
});

export const { loginUser, setUpdateProfile, setGetUserDetails, setProfileProgress,setAllUserDetails, logout } =
  authSlice.actions;

export default authSlice.reducer;