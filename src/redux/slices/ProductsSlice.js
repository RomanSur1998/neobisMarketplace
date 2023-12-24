import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: 1,
      isFavor: true,
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
      id: 2,
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
  myProduct: [
    {
      id: 1,
      isFavor: true,
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
      id: 2,
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
  favoritesProduct: [
    {
      id: 1,
      isFavor: true,
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
      id: 2,
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
      isFavor: true,
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
      id: 8,
      isFavor: true,
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
      state.myProduct = [...state.myProduct.pop(action.payload)];
    },
  },
});

export const { setProduct, setMyproduct } = productSlice.actions;
export default productSlice.reducer;
