import { createSlice } from "@reduxjs/toolkit";
import alertReducers from "../Reducers/alert";

const initialState = [];

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: alertReducers,
});

export const alertActions = alertSlice.actions;

export default alertSlice;
