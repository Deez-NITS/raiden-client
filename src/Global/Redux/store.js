import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/auth-slice";
import alertSlice from "./Slices/alert-slice";
import cartSlice from "./Slices/cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
