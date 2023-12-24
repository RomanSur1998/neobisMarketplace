import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  myProduct: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = {
        ...action.payload,
      };
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
