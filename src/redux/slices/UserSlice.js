import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  error: false,
  status: null,
  isShowPass: false,
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
    setShowPass(state, action) {
      state.isShowPass = action.payload;
    },
  },
});
export const { setUser, setShowPass } = userSlice.actions;
export default userSlice.reducer;
