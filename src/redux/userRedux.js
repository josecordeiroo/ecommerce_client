import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },

  //update

  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, {payload}) => {
      state.isFetching = false
      state.currentUser = payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
  },
});

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
