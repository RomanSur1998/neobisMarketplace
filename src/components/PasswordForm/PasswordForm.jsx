import React from "react";
import styles from "../PasswordForm/PasswordForm.module.scss";
import Field from "../Field/Field";
import { useFormik } from "formik";

const PasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values, "passwords");
    },
    // validationSchema,
  });
  return (
    <>
      <form>
        <Field
          type={"password"}
          name={"password"}
          formik={formik}
          placeholder={"Имя пользователя"}
          isPass={true}
        />
        <Field
          type={"password"}
          name={"confirmPassword"}
          formik={formik}
          placeholder={"Имя пользователя"}
          isPass={true}
        />
      </form>
    </>
  );
};

export default PasswordForm;
