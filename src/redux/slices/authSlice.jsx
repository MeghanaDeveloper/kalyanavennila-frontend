import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
  isAuthenticated: !!localStorage.getItem("loginToken"),
}

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        state.isAuthenticated = true;
        state.userData = {...state.userData, ...action.payload};
    },  
    setUpdateProfile: (state, action) => {
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload, profilePic: action.payload.profilePic };
    },
    setGetUserDetails : (state, action) => {
      state.isAuthenticated = true;
      state.userData = {...state.userData, ...action.payload};
    },
    logout: (state) => {
        state.isAuthenticated = false;  
        state.userData={}  
      localStorage.removeItem('loginToken');
    },
  },
})

export const {
    loginUser,
    setUpdateProfile,
    setGetUserDetails,
  logout,
}
  = authSlice.actions

export default authSlice.reducer