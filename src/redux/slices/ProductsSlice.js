import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../helpers/productData";

export const productSlice = createSlice({
  name: "product",
  initialState: productData,
  reducers: {
    setProduct(state, action) {
      const products = [...state.product];
      products.unshift(action.payload);
      state.product = products;
    },
    setMyproduct(state, action) {
      const products = [...state.myProduct];
      products.unshift(action.payload);
      state.myProduct = products;
    },
    setFavoritesProduct(state, action) {
      state.favoritesProduct = [
        action.payload,
        ...state.favoritesProduct.filter(
          (elem) => elem.id !== action.payload.id
        ),
      ];
    },
    setIsFavor(state, action) {
      const productIdToUpdate = action.payload.id;
      state.product = state.product.map((product) => {
        if (product.id === productIdToUpdate) {
          return { ...product, isFavor: true };
        }
        return product;
      });
    },
    setIsFavorMyProduct(state, action) {
      const productIdToUpdate = action.payload.id;
      state.myProduct = state.myProduct.map((product) => {
        if (product.id === productIdToUpdate) {
          return { ...product, isFavor: true };
        }
        return product;
      });
    },
    setApdateProduct(state, action) {
      const productIdToUpdate = action.payload.id;

      state.product = state.product.map((elem) => {
        if (elem.id === productIdToUpdate) {
          return action.payload;
        }

        return elem;
      });
    },
    setApdateMyProduct(state, action) {
      const productIdToUpdate = action.payload.id;

      state.myProduct = state.myProduct.map((elem) => {
        if (elem.id === productIdToUpdate) {
          return action.payload;
        }

        return elem;
      });
    },
    setProductDelete(state, action) {
      const productIdToUpdate = action.payload.id;
      state.product = state.product.filter(
        (elem) => elem.id !== productIdToUpdate
      );
    },
    setMyProductDelete(state, action) {
      const productIdToUpdate = action.payload.id;
      state.myProduct = state.myProduct.filter(
        (elem) => elem.id !== productIdToUpdate
      );
    },
  },
});

export const {
  setProduct,
  setMyproduct,
  setFavoritesProduct,
  setIsFavor,
  setApdateProduct,
  setIsFavorMyProduct,
  setProductDelete,
  setMyProductDelete,
  setApdateMyProduct,
} = productSlice.actions;
export default productSlice.reducer;
