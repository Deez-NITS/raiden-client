import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/auth-slice";
import alertSlice from "./Slices/alert-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
