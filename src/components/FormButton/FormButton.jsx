import React from "react";
import styles from "../FormButton/FormButton.module.scss";

const FormButton = ({ formik, text }) => {
  return (
    <button
      className={formik.isValid ? "button purple" : "button"}
      type="submit"
    >
      {text}
    </button>
  );
};

export default FormButton;
