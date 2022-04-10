import { createSlice } from "@reduxjs/toolkit";
import cartReducers from "../Reducers/cart";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart") ?? initialState,
  reducers: cartReducers,
});

export const cartActions = cartSlice.actions;

export default cartSlice;
