import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  email: "",
  password: "",
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    onLogin(state, action) {
      console.log(action.payload);
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    onLogout(state, action) {
      console.log('onlogout')
      state.isLoggedIn = false;
      state.email = '';
      state.password = '';
      state.token = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
