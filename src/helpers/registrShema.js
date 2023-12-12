import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup.string().required("Обязательное поле"),
  email: yup.string().email("Поправьте почту ").required("Введите почту"),
});
