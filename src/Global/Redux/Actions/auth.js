import { authActions } from "../Slices/auth-slice";

/**
 *
 * @param {{
 *    name: string;
 *    phoneNo: string;
 *    email: string;
 *    password: string;
 * }} data
 * @description Creates a action creator thunk for registering of a user
 */
export const registerUser = (data) => {
  return async (dispatch) => {
    const { name, phoneNo, email, password } = data;

    dispatch(authActions.login());

    try {
      // Call backend API for registering
      dispatch(authActions.otpSend());

      // On success
      dispatch(authActions.loginSuccess());
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
    const { email, otp } = data;

    dispatch(authActions.otpVerify());

    try {
      // Send request to backend

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
    const { email, password } = data;

    dispatch(authActions.login());

    try {
      // Send request to backend
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

      // If success
      dispatch(authActions.logoutSuccess());
    } catch (err) {
      // If error
      dispatch(authActions.logoutFailure());
    }
  };
};
