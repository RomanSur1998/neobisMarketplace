import { confAxios, configuretedAxios } from "../config/AxiosConfig";

export const api = {
  registration: async function (data, navigate) {
    try {
      const respose = await configuretedAxios.post(
        "/registration/register",
        data
      );
      console.log(respose, "Данные с api");
      navigate("/");
      return respose;
    } catch (error) {
      console.error("Registration error", error);
      return error;
    }
  },
  autorisation: async function (data, uncorrectUser, navigate) {
    try {
      const response = await configuretedAxios.post("/registration/log", data);
      navigate("/main");
      return response;
    } catch (error) {
      console.error("Autoresation error ", error);
      uncorrectUser();
      //   ! Обработка ошибки если ошибка есть то , нужно  выполнить тостер
    }
  },
  check: async function (data, navigate, checkUser) {
    try {
      const response = await configuretedAxios.post(
        "/registration/credentialsCheck",
        data
      );
      console.log(response, "api");
      if (response.data.statusCodeValue === 200) {
        navigate("/pass");
      }
      return response;
    } catch (error) {
      checkUser();
      console.error("error check", error);
    }
  },
  getAllProduct: async function () {
    try {
      const response = await confAxios.get("");
      console.log("получил данные о продуктах", response);
      return response;
    } catch (error) {
      console.error(error, "error get all Product");
    }
  },
};
