import React from "react";
import styles from "../PasswordForm/PasswordForm.module.scss";
import Field from "../Field/Field";
import { useFormik } from "formik";
import FormButton from "../FormButton/FormButton";

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
      <form className={styles.form}>
        <Field
          type={"password"}
          name={"password"}
          formik={formik}
          placeholder={"Введите пароль"}
          isPass={true}
          isPassword={true}
        />
        <Field
          type={"password"}
          name={"confirmPassword"}
          formik={formik}
          placeholder={"Подтвердите пароль"}
          isPass={true}
          isPassword={true}
        />
        <FormButton formik={formik} text={"Далее"} />
      </form>
    </>
  );
};

export default PasswordForm;
