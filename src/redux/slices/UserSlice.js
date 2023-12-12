import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  error: false,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
      };
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
