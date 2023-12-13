import React from "react";
import styles from "../RegistrationForm/RegistrationForm.module.scss";
import { useFormik } from "formik";
import Field from "../Field/Field";
import { validationSchema } from "../../helpers/registrShema";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/UserSlice";
import FormButton from "../FormButton/FormButton";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    onSubmit: (value) => {
      console.log(value, "regist value");
      dispatch(setUser(value));
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
