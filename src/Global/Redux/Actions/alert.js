import { alertActions } from "../Slices/alert-slice";
import { v4 as uuid } from "uuid";

/**
 * @param {{
 *    type: "success"|"danger";
 *    message: string;
 * }} data
 * @param {number} timeout
 */
export const setAlert = (dispatch, data, timeout = 5000) => {
  const id = uuid();
  dispatch(alertActions.setAlert({ id, ...data }));

  setTimeout(() => dispatch(alertActions.removeAlert(id)), timeout);
};
