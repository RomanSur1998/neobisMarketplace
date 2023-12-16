import * as yup from "yup";

export const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^0\d{9}$/, "Неверный формат номера ")
    .required("Обязательное поле "),
});
