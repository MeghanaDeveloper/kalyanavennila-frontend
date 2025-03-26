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
        console.log(action.payload)
        state.isAuthenticated = true;
        state.userData = {...state.userData, ...action.payload};
    },  
    setUpdateProfile: (state, action) => {
      state.isAuthenticated = true;
      state.userData = { ...state.userData, ...action.payload, profilePic: action.payload.profilePic };
    },
    
    logout: (state) => {
        state.isAuthenticated = false;    
      localStorage.removeItem('loginToken');
    },
  },
})

export const {
    loginUser,
    setUpdateProfile,
  logout,
}
  = authSlice.actions

export default authSlice.reducer