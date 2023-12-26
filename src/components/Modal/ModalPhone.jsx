import React from "react";
import phone from "../../assets/icons/handset.svg";
import styles from "../Modal/Modal.module.scss";
import ModalButton from "../ModalButton/ModalButton";
import { validationSchema } from "../../helpers/phoneShema";
import { useFormik } from "formik";

import MaskedInput from "react-text-mask";
import { phoneNumberMask } from "../../helpers/phoneMask";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../redux/slices/UserSlice";

const ModalPhone = ({
  isActive,
  setIsActive,
  setIsCodeModalActive,
  isCodeModalActive,
}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      dispatch(setPhoneNumber(values.phoneNumber));
      values.phoneNumber = values.phoneNumber.replace(/\(|\)|\-|\s/g, "");
      console.log(values.phoneNumber, "Phone Number");
      setIsActive(!isActive);
      setIsCodeModalActive(!isCodeModalActive);
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
        <p>Мы отправим вам СМС с кодом подтвержения</p>
        <form onSubmit={formik.handleSubmit}>
          <MaskedInput
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            mask={phoneNumberMask}
            placeholder="0(000) 000 000"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* если стейт будет то отодбдбразить данную ошибку  */}
          {/* <h4 className="red">Данный номер уже зарегестрирован</h4> */}
          <ModalButton text={"Далее"} formik={formik} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ModalPhone;
