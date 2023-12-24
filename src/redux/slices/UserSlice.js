import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { checkAvialability, loginUser, registUser } from "./UserActions";

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
    setToken(state, action) {
      state.token = action.payload;
    },
    setShowPass(state, action) {
      state.isShowPass = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registUser.fulfilled, (state, action) => {
      state.status = "ok";
    });
    builder.addCase(checkAvialability.rejected, (state, action) => {
      state.error = false;
    });
    builder.addCase(checkAvialability.fulfilled, (state, action) => {
      state.error = true;
    });
  },
});
export const { setUser, setShowPass, setLogin, setToken } = userSlice.actions;
export default userSlice.reducer;
