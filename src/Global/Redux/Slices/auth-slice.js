import { createSlice } from "@reduxjs/toolkit";
import authReducers from "../Reducers/auth";

const authInitialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  otpSent: false,
  otpVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: authReducers,
});

export const authActions = authSlice.actions;

export default authSlice;
