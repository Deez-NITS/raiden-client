import { authActions } from "../Slices/auth-slice";

import httpService from "../../Services/httpService";

/**
 *
 * @param {{
 *    name: string;
 *    phoneNumber: string;
 *    email: string;
 *    password: string;
 *    dob: string;
 * }} data
 * @description Creates a action creator thunk for registering of a user
 */
export const registerUser = (data) => {
  return async (dispatch) => {
    // Check user input
    const { email, dob, name, phoneNumber } = data;
    dispatch(authActions.login());

    try {
      // Call backend API for registering
      const res = await httpService.post("/auth/signup", data);

      // TODO alert state update
      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      dispatch(authActions.otpSend());

      // On success
      // TODO Success state update

      // res.data.message is "User created successfully" so need to display as a success alert
      dispatch(
        authActions.loginSuccess({
          email,
          dob,
          phoneNumber,
          name,
        })
      );
      dispatch(authActions.otpSendSuccess());
    } catch (err) {
      // If Login error
      dispatch(authActions.loginFailure());
      // If OTP error
      dispatch(authActions.otpSendFailure());
    }
  };
};

/**
 *
 * @param {{
 *    otp: string;
 *    email: string;
 * }} data
 * @description Creates a action creator thunk for verification of OTP
 */
export const verifyOtp = (data) => {
  return async (dispatch) => {
    dispatch(authActions.otpVerify());

    try {
      // Send request to backend
      const res = await httpService.post("/auth/otp/verify", data);

      // TODO alert state update
      if (!res.data.success) {
        throw new Error(res.data.error);
      }
      // TODO Success state update

      // If success
      dispatch(authActions.otpVerifySuccess());
    } catch (err) {
      // If error
      dispatch(authActions.otpVerifyFailure());
    }
  };
};

/**
 *
 * @param {any} data
 * @description Creates a action creator thunk for loading the user
 */
export const loadUser = (data) => {
  return async (dispatch) => {
    dispatch(authActions.userLoading());

    try {
      // Send request to backend
      let user;
      // If success
      dispatch(authActions.userLoadingSuccess(user));
    } catch (err) {
      // If error
      dispatch(authActions.otpVerifyFailure());
    }
  };
};

/**
 *
 * @param {{
 *    email: string;
 *    password: string;
 * }} data
 * @description Creates a action creator thunk for logging the user in
 */
export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(authActions.login());

    try {
      // Send request to backend
      const res = await httpService.post("/auth/login", data);

      // TODO Alert state update
      if (!res.data.success) {
        throw new Error(res.data.error);
      }
      // TODO Success state update

      // Fetch user and then store globally
      let user;
      // If success
      dispatch(authActions.loginSuccess(user));
    } catch (err) {
      // If error
      dispatch(authActions.loginFailure());
    }
  };
};

/**
 *
 * @description Creates a action creator thunk for logging the user out
 */
export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(authActions.logout());

    try {
      // Send request to backend
      const res = await httpService.post("/auth/logout");

      // TODO Alert state update
      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      // TODO Success state update

      // If success
      dispatch(authActions.logoutSuccess());
    } catch (err) {
      // If error
      dispatch(authActions.logoutFailure());
    }
  };
};
