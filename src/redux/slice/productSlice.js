import { products } from "../../data";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  productData: [],
  filterData: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
});
export const { setLoading, setProductData, setFilterData } =
  productSlice.actions;
export default productSlice.reducer;
