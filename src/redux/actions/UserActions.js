import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
export const registUser = createAsyncThunk(
  "user/registUser",
  async ({ data, navigate }) => {
    try {
      console.log("Запрос проходит");
      const respose = await api.registration(data, navigate);
      console.log(respose, "response");
    } catch (error) {
      console.error(error);
    }
  }
);

export const checkAvialability = createAsyncThunk(
  "user/checkAvialability",
  async ({ data, navigate, checkUser }) => {
    const respose = await api.check(data, navigate, checkUser);

    console.log(respose);
    try {
    } catch (error) {
      console.error("error check", error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ data, uncorrectUser, navigate }) => {
    try {
      const response = await api.autorisation(data, uncorrectUser, navigate);
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      console.log("token new", tokens);
      tokens = response.data.token;
      console.log(response);
      localStorage.setItem("tokens", JSON.stringify(tokens));
      return response;
    } catch (error) {
      console.error(error, "Error login");
    }
  }
);
