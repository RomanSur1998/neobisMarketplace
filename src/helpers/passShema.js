import * as yup from "yup";

export const validationSchema = yup.object({
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "От 8 до 15 символов")
    .max(15, "От 8 до 15 символов")
    .matches(/[a-zA-Z]/, "Строчные и прописные буквы")
    .matches(/\d/, "Минимум 1 цифра")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Минимум 1 спецсимвол"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтверждения пароля"),
});
