import React from "react";
import phone from "../../assets/icons/handset.svg";
import styles from "../Modal/Modal.module.scss";
import ModalButton from "../ModalButton/ModalButton";
// import Field from "../Field/Field";

const ModalPhone = ({ isActive, setIsActive }) => {
  // const fromik = useFormik({});
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
        <form action="">
          {/* <Field /> */}
          <input type="text" placeholder="0(000) 000 000" />

          {/* <h4>Данный номер уже зарегестрирован</h4> */}
          <ModalButton text={"Далее"} />
        </form>
      </div>
    </div>
  );
};

export default ModalPhone;
