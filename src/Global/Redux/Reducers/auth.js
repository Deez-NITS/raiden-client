/**
 * @typedef {{
 *      isAuthenticated: boolean;
 *      user: Object;
 *      token: string;
 *      loading: boolean;
 *      otpSent: boolean;
 *      otpVerified: boolean;
 *    }} authState
 *
 * @typedef {{
 *      type: string;
 *      payload: any;
 *    }} actionType
 */

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const login = (state) => ({
  ...state,
  loading: true,
});

/**
 *
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const loginSuccess = (state, action) => {
  localStorage.setItem("token", action.payload.token);
  return {
    ...state,
    isAuthenticated: true,
    user: action.payload,
    loading: false,
    token: action.payload.token,
  };
};

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const loginFailure = (state) => {
  localStorage.removeItem("token");
  return {
    ...state,
    loading: false,
  };
};

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const logout = (state) => ({
  ...state,
  loading: true,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const logoutSuccess = (state) => {
  localStorage.removeItem("token");
  return {
    ...state,
    isAuthenticated: false,
    user: null,
    loading: false,
    token: null,
  };
};

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const logoutFailure = (state) => ({
  ...state,
  loading: false,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpSend = (state) => ({
  ...state,
  loading: true,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpSendSuccess = (state) => ({
  ...state,
  loading: false,
  otpSent: true,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpSendFailure = (state) => ({
  ...state,
  loading: false,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpVerify = (state) => ({
  ...state,
  loading: true,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpVerifySuccess = (state) => ({
  ...state,
  loading: false,
  otpVerified: true,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const otpVerifyFailure = (state) => ({
  ...state,
  loading: false,
});

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const userLoading = (state) => ({
  ...state,
  loading: true,
});

/**
 *
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const userLoadingSuccess = (state, action) => {
  localStorage.setItem("token", action.payload.token);
  return {
    ...state,
    isAuthenticated: true,
    user: action.payload,
    loading: false,
    token: action.payload.token,
  };
};

/**
 *
 * @param { authState } state
 *
 * @returns {authState}
 */
const userLoadingFailure = (state) => ({
  ...state,
  loading: false,
});

export default {
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
};
