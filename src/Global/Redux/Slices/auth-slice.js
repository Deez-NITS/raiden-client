import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  otpSend,
  otpSendSuccess,
  otpSendFailure,
  otpVerify,
  otpVerifySuccess,
  otpVerifyFailure,
  userLoading,
  userLoadingSuccess,
  userLoadingFailure,
} from "../Reducers/auth";

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
  reducers: {
    login,
    loginSuccess,
    loginFailure,
    logout,
    logoutSuccess,
    logoutFailure,
    otpSend,
    otpSendSuccess,
    otpSendFailure,
    otpVerify,
    otpVerifySuccess,
    otpVerifyFailure,
    userLoading,
    userLoadingSuccess,
    userLoadingFailure,
  },
});

export const authActions = authSlice.actions;

export default authSlice;
