import { confAxios, configuretedAxios } from "../config/AxiosConfig";

export const api = {
  registration: async function (data, navigate) {
    try {
      const response = await configuretedAxios.post(
        "/registration/register",
        data
      );
      console.log(response, "Данные с api");
      if (response.status === 200) {
        navigate("/");
      }
      return response;
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
  getOwnProduct: async function () {
    try {
      const response = await confAxios.get("");
      console.log(response, "Продукты user");
      return response;
    } catch (error) {
      console.log(error, "Own product error");
    }
  },
  getFavoritesProducts: async function () {
    try {
      const response = await confAxios.get("");
      return response;
    } catch (error) {
      console.log(error, "ошибка при получении favorites");
    }
  },
  setMyProduct: async function (formData) {
    try {
      const response = await confAxios.post("", formData);
      return response;
    } catch (error) {
      console.log(error, "ошибка при отправке продукта");
    }
  },
};
