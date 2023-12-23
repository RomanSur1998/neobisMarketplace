import React from "react";
import card from "../../assets/icons/shoping-card.svg";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import arrow from "../../assets/icons/arrow.svg";
import open from "../../assets/icons/is-show-pass.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import styles from "../RegistrPage/RegistrationPage.module.scss";

const RegistrationPage = () => {
  const checkUser = () =>
    toast.error("Данный пользователь уже зарегистрирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  console.log(error, "user");

  return (
    <>
      <section className={styles.container}>
        <div className={styles.card}>
          <img src={card} alt="" />
        </div>
        <div className={styles.reg}>
          <div className={styles.flex}>
            <div className={styles.arrow}>
              <img
                src={arrow}
                alt=""
                onClick={() => {
                  navigate("/");
                }}
              />
              <span>Назад</span>
            </div>
            <span>Регистрация </span>
            <div className={styles.open}>
              <img src={open} alt="" />
            </div>
          </div>
          <div className={styles.form}>
            <RegistrationForm checkUser={checkUser} />{" "}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default RegistrationPage;
