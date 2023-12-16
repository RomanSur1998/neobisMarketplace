import React from "react";
import styles from "../RegistrationForm/RegistrationForm.module.scss";
import { useFormik } from "formik";
import Field from "../Field/Field";
import { validationSchema } from "../../helpers/registrShema";
import FormButton from "../FormButton/FormButton";
import { useNavigate } from "react-router";
import { setUsername } from "../../helpers/formatUsername/setUsername";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    onSubmit: (value) => {
      setUsername(value);
      navigate("/pass");
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
          type={"text"}
          name={"email"}
          formik={formik}
          placeholder={"Почта"}
        />

        <FormButton formik={formik} text={"Далее"} />
      </form>
    </>
  );
};

export default RegistrationForm;
