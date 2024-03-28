import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  addCard: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const isItemInCart = state.addCard.some(
        (item) => item.id === action.payload.id
      );
      if (!isItemInCart) {
        state.addCard.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      state.addCard = state.addCard.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addTocart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
