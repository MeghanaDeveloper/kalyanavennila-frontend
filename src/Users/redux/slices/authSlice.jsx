import { createSlice } from "@reduxjs/toolkit";

const getInitialAuthState = () => {
  const token = localStorage.getItem("loginToken");
  console.log(Boolean(token))
  return Boolean(token);
};

const initialState = {
    isAuthenticated: getInitialAuthState(),
  userData: {},
   profileProgress: 0,
   allUserDetails:[]
};
console.log("Initial isAuthenticated:", initialState.isAuthenticated);
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => { 
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setUpdateProfile: (state, action) => {
     // state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setGetUserDetails: (state, action) => {
      //state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setProfileProgress: (state, action) => {
      //state.isAuthenticated = true;
      state.profileProgress = action.payload 
    },
    setAllUserDetails: (state, action) => {
      //state.isAuthenticated = true;
      state.allUserDetails = action.payload
    },
    logout: (state) => {
      localStorage.removeItem("loginToken");
      state.isAuthenticated = false;
      state.userData = {};
      state.profileProgress=0
    },
  },
});

export const { loginUser, setUpdateProfile, setGetUserDetails, setProfileProgress,setAllUserDetails, logout } =
  authSlice.actions;

export default authSlice.reducer;