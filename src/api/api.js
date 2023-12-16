import { configuretedAxios } from "../config/AxiosConfig";

export const api = {
  registration: async function (data) {
    try {
      const respose = await configuretedAxios.post("", data);
      return respose;
    } catch (error) {
      console.error("Registration error", error);
    }
  },
  autorisation: async function (data) {
    try {
      const response = await configuretedAxios.post("", data);
      return response;
    } catch (error) {
      console.error("Autoresation error ", error);
      //   ! Обработка ошибки если ошибка есть то , нужно  выполнить тостер
    }
  },
};
