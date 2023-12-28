import axios from "axios";
import { API } from "../helpers/constatns";

export const configuretedAxios = axios.create({
  baseURL: API,
});

export const confAxios = (formData) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = tokens ? `Bearer ${tokens}` : null;

  const ContentType = formData ? "multipart/form-data" : null;

  const instanceAxios = axios.create({
    baseURL: API,
    headers: {
      "Content-Type": `${ContentType}`,
      Authorization: Authorization,
    },
  });
  return instanceAxios;
};

configuretedAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);
