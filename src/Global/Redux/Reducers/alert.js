/**
 * @typedef {[{
 *      id: string;
 *      type: "success" | "danger";
 *      message: string;
 *    }]} authState
 *
 * @typedef {{
 *      type: string;
 *      payload: any;
 *    }} actionType
 */

/**
 *
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const setAlert = (state, action) => [...state, action.payload];

/**
 *
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const removeAlert = (state, action) =>
  state.filter((s) => s.id !== action.payload);

export default {
  setAlert,
  removeAlert,
};
