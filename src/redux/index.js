import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import ProductsSlice from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
