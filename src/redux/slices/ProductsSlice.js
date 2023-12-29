import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: 1,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 2,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 3,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 4,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 5,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 6,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 7,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 8,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 9,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 10,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 11,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 12,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 13,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 14,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 15,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 16,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
  ],
  myProduct: [
    {
      id: 1,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 2,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 3,
      isFavor: false,
      files: [
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
        "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/4u4a5328.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 4,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
    {
      id: 5,
      isFavor: false,
      files: [
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
        "http://localhost:5173/src/assets/pictures/car_example.jpg",
      ],
      reiting: 100,
      price: 1200,
      name: "BMW M4 Coupe: A Two-Door",
      description:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
      fullDescription:
        "The BMW M4 Coupe is a high-performance version of the BMW M4 roadster and offers an exceptional",
    },
  ],
  favoritesProduct: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
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
