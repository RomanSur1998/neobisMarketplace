import axios from "axios";
import { API } from "../helpers/constatns";

export const configuretedAxios = axios.create({
  baseURL: API,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export const confAxios = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = tokens ? `Bearer ${tokens}` : null;
  const instenseAsiox = axios.create({
    baseURL: API,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: Authorization,
    },
  });
  return instenseAsiox;
};

configuretedAxios.interceptors.response.use({});
