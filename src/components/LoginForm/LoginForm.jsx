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
    onSubmit: (values) => {},
    validationSchema,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Field
          classblock={""}
          type={"text"}
          name={" username"}
          formik={formik}
          placeholder={"Имя пользователя"}
        />
        <Field
          classblock={""}
          type={"text"}
          name={" username"}
          formik={formik}
          placeholder={"Почта"}
        />
        <button className="button">Далее</button>
      </form>
    </>
  );
};

export default LoginForm;
