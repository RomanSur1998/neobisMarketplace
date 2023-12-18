import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  user: {},
  token: "",
  error: false,
  status: null,
  isShowPass: false,
  phoneNumber: "",
};

export const registUser = createAsyncThunk(
  "user/registUser",
  async ({ data, navigate }) => {
    try {
      console.log("Запрос проходит");
      const respose = await api.registration(data, navigate);
      console.log(respose, respose);
      // navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ data, uncorrectUser, navigate }) => {
    try {
      const response = await api.autorisation(data, uncorrectUser, navigate);
      console.log("response", response);
    } catch (error) {
      console.error(error, "Error login");
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(registUser.fulfilled, (state, action) => {
      state.status = "ok";
    });
  },
});
export const { setUser, setShowPass, setLogin } = userSlice.actions;
export default userSlice.reducer;
