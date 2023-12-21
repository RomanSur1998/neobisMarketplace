import { configuretedAxios } from "../config/AxiosConfig";

export const api = {
  registration: async function (data, navigate) {
    try {
      const respose = await configuretedAxios.post("/api/registration", data);
      navigate("/main");
      return respose;
    } catch (error) {
      console.error("Registration error", error);
    }
  },
  autorisation: async function (data, uncorrectUser, navigate) {
    try {
      const response = await configuretedAxios.post(
        "/api/authentication",
        data
      );
      navigate("/main");
      return response;
    } catch (error) {
      console.error("Autoresation error ", error);
      uncorrectUser();
      //   ! Обработка ошибки если ошибка есть то , нужно  выполнить тостер
    }
  },
};
