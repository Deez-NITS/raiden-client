import { authActions } from "../Slices/auth-slice";
import { setAlert } from "./alert";

import httpService from "../../Services/httpService";

/**
 * @param {{
 *    name: string;
 *    phoneNumber: string;
 *    email: string;
 *    password: string;
 *    dob: string;
 *    type: "user" | "provider"
 * }} data
 * @description Creates a action creator thunk for registering of a user
 */
export const registerUser = (data) => {
  return async (dispatch) => {
    // Check user input
    const { email, dob, name, phoneNumber, type } = data;
    dispatch(authActions.login());

    try {
      // Call backend API for registering
      const res = await httpService.post(`/auth/signup/${type}`, {
        ...data,
        dob: new Date(dob).getTime(),
      });

      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      dispatch(authActions.otpSend());

      // On success
      setAlert(dispatch, { message: res.data.message, type: "success" });

      // res.data.message is "User created successfully" so need to display as a success alert
      dispatch(
        authActions.registrationSuccess({
          email,
          dob: new Date(dob).getTime(),
          phoneNumber,
          name,
        })
      );
      dispatch(authActions.otpSendSuccess());
    } catch (err) {
      // If Login error
      setAlert(dispatch, { message: err.message, type: "danger" });
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
 *    type: "user" | "provider"
 * }} data
 * @description Creates a action creator thunk for verification of OTP
 */
export const verifyOtp = (data) => {
  return async (dispatch) => {
    dispatch(authActions.otpVerify());

    try {
      // Send request to backend
      const res = await httpService.post(`/auth/otp/verify/${data.type}`, data);

      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      setAlert(dispatch, { message: res.data.message, type: "success" });
      // If success
      dispatch(authActions.otpVerifySuccess());
    } catch (err) {
      // If error
      setAlert(dispatch, { message: err.message, type: "danger" });
      dispatch(authActions.otpVerifyFailure());
    }
  };
};

/**
 * @param {{
 *    email: string;
 *    type: "user" | "provider"
 * }} data
 * @description Creates a action creator thunk for verification of OTP
 */
export const resendOtp = (data) => {
  return async (dispatch) => {
    dispatch(authActions.otpSend());

    try {
      // Send request to backend
      const res = await httpService.post(`/auth/otp/new/${data.type}`, data);

      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      setAlert(dispatch, { message: res.data.message, type: "success" });
      // If success
      dispatch(authActions.otpSendSuccess());
    } catch (err) {
      // If error
      setAlert(dispatch, { message: err.message, type: "danger" });
      dispatch(authActions.otpSendFailure());
    }
  };
};

/**
 * @description Creates a action creator thunk for loading the user
 */
export const loadUser = () => {
  return async (dispatch) => {
    dispatch(authActions.userLoading());

    try {
      // Send request to backend
      const res = await httpService.get("/user");

      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      // If success
      dispatch(authActions.userLoadingSuccess(res.data.message));
    } catch (err) {
      // If error
      setAlert(dispatch, { message: err.message, type: "danger" });
      dispatch(authActions.userLoadingFailure());
    }
  };
};

/**
 *
 * @param {{
 *    email: string;
 *    password: string;
 *    type: "user" | "provider"
 * }} data
 * @description Creates a action creator thunk for logging the user in
 */
export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(authActions.login());

    try {
      // Send request to backend
      const res = await httpService.post(`/auth/login/${data.type}`, data);

      if (!res.data.success) {
        throw new Error(res.data.error);
      }
      setAlert(dispatch, { message: res.data.message, type: "success" });
      // Fetch user and then store globally

      // If success
      dispatch(authActions.loginSuccess({ email: data.email }));
    } catch (err) {
      if (err.message === "User not verified") {
        dispatch(
          authActions.registrationSuccess({
            email: data.email,
          })
        );
      }

      setAlert(dispatch, { message: err.message, type: "danger" });
      // If error
      dispatch(authActions.loginFailure());
    }
  };
};

/**
 * @description Creates a action creator thunk for logging the user out
 */
export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(authActions.logout());

    try {
      // Send request to backend
      const res = await httpService.post("/auth/logout");

      if (!res.data.success) {
        throw new Error(res.data.error);
      }

      setAlert(dispatch, { message: res.data.message, type: "success" });

      // If success
      dispatch(authActions.logoutSuccess());
    } catch (err) {
      // If error
      setAlert(dispatch, { message: err.message, type: "danger" });
      dispatch(authActions.logoutFailure());
    }
  };
};
