import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
  },
});

export default store;
