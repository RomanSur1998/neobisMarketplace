import React from "react";
import Field from "../Field/Field";
import { useFormik } from "formik";
import FormButton from "../FormButton/FormButton";
import { validationSchema } from "../../helpers/passShema";
import styles from "../PasswordForm/PasswordForm.module.scss";
import { useDispatch } from "react-redux";
import { getUsername } from "../../helpers/formatUsername/getUsername";
import { useNavigate } from "react-router";
import { registUser } from "../../redux/slices/UserActions";

const PasswordForm = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      dispatch(registUser({ data: getUsername(values), navigate }));
    },
    validationSchema,
  });
  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Field
          type={"password"}
          name={"password"}
          formik={formik}
          placeholder={"Введите пароль"}
          isPassword={true}
        />
        {!formik.errors.password && formik.touched.password ? (
          <Field
            type={"password"}
            name={"confirmPassword"}
            formik={formik}
            placeholder={"Подтвердите пароль"}
            isPassword={true}
          />
        ) : null}

        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <div className="red centre-text">{formik.errors.confirmPassword}</div>
        ) : null}

        <FormButton formik={formik} text={"Далее"} type="submit" />
      </form>
    </>
  );
};

export default PasswordForm;
