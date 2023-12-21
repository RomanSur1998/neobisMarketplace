import axios from "axios";
import { API } from "../helpers/constatns";

export const configuretedAxios = axios.create({
  baseURL: API,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
