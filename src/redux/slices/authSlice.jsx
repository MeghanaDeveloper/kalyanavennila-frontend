import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
  token: localStorage.getItem("loginToken") || null,
  isAuthenticated: !!localStorage.getItem("loginToken"),
}

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        console.log(action.payload, action.payload.token)
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload;
        localStorage.setItem("loginToken", action.payload.token); 
    },    
    logout: (state) => {
        state.isAuthenticated = false;    
      state.userData = {};
      state.token = null;
      localStorage.removeItem('loginToken');
    },
  },
})

export const {
    loginUser,
  logout,
}
  = authSlice.actions

export default authSlice.reducer