import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import {
  checkAvialability,
  loginUser,
  registUser,
} from "../actions/UserActions";

const initialState = {
  user: {},
  userOwnData: {
    name: "",
    surName: "",
    login: "",
    dateOfbirth: "",
  },
  token: "",
  error: false,
  status: null,
  isShowPass: false,
  phoneNumber: "0 000 000-000",
  user_photo: null,
  code: "",
  code_error: false,
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
    setCode(state, action) {
      state.code = action.payload;
    },
    setUserPhoto(state, action) {
      state.user_photo = action.payload;
    },
    setUserOwnData(state, action) {
      state.userOwnData = action.payload;
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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.data.jwtToken;
    });
  },
});
export const {
  setUser,
  setShowPass,
  setLogin,
  setToken,
  setPhoneNumber,
  setCode,
  setUserPhoto,
  setUserOwnData,
} = userSlice.actions;
export default userSlice.reducer;
