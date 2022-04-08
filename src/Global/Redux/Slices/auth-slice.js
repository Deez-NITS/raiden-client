import { createSlice } from "@reduxjs/toolkit";
import authReducers from "../Reducers/auth";

const authInitialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  otpSent: false,
  otpVerified: false,
  type: "user",
  fetched: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: authReducers,
});

export const authActions = authSlice.actions;

export default authSlice;
