import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  error: false,
  status: null,
  isShowPass: false,
  phoneNumber: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = {
        ...state.user,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };
    },
    setLogin(state, action) {
      state.user = {
        username: action.payload.username,
        password: action.payload.password,
      };
    },
    setShowPass(state, action) {
      state.isShowPass = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});
export const { setUser, setShowPass, setLogin } = userSlice.actions;
export default userSlice.reducer;
