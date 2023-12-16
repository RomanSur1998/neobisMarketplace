import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "../../helpers/loginShema";
import Field from "../Field/Field";
import FormButton from "../FormButton/FormButton";
import styles from "../LoginForm/LoginForm.module.scss";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/UserSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "values");
      dispatch(setLogin(values));
    },
    validationSchema,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Field
          type={"text"}
          name={"username"}
          formik={formik}
          placeholder={"Имя пользователя"}
        />
        <Field
          type={"password"}
          name={"password"}
          formik={formik}
          placeholder={"Пароль"}
        />

        <FormButton formik={formik} text={"Войти"} type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
