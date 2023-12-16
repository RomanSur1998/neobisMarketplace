import React from "react";
import phone from "../../assets/icons/handset.svg";
import styles from "../Modal/Modal.module.scss";
import ModalButton from "../ModalButton/ModalButton";
import { validationSchema } from "../../helpers/phoneShema";
import { useFormik } from "formik";
import { phoneMask } from "../../helpers/phoneMask";

const ModalPhone = ({ isActive, setIsActive }) => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values, "Phone Number");
      setIsActive(!isActive);
    },
    validationSchema,
  });
  return (
    <div
      className={styles.modal}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3>Изменить номер телефона </h3>
        <img src={phone} alt="" />
        <h4> Введите номер телефона </h4>
        <h5>Мы отправим вам СМС с кодом подтвержения</h5>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="0(000) 000 000"
            name="phoneNumber"
            // value={phoneMask(formik.values.phoneNumber)}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* если стейт будет то отодбдбразить данную ошибку  */}
          {/* <h4 className="red">Данный номер уже зарегестрирован</h4> */}
          <ModalButton text={"Далее"} formik={formik} />
        </form>
      </div>
    </div>
  );
};

export default ModalPhone;
