import { useFormik } from "formik";
import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import { validationSchema } from "../../helpers/loginShema";
import Field from "../Field/Field";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "values");
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
        <button className={formik.isValid ? "button purple" : "button"}>
          Далее
        </button>
      </form>
    </>
  );
};

export default LoginForm;
