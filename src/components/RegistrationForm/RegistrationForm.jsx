import React from "react";
import styles from "../RegistrationForm/RegistrationForm.module.scss";
import { useFormik } from "formik";
import Field from "../Field/Field";
import { validationSchema } from "../../helpers/registrShema";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/UserSlice";

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
        <button
          className={formik.isValid ? "button purple" : "button"}
          type="submit"
        >
          Далее
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
