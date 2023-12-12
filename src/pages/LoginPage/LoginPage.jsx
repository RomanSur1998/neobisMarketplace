import React from "react";
import styles from "../LoginPage/LoginPage.module.css";
import card from "../../assets/icons/shoping-card.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const notify = () =>
    toast.error("Неверный логин или пароль", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card}>
          <img src={card} alt="" />
        </div>
        <div className={styles.form}>
          <LoginForm />
          <h3 className={styles.purpule}>Зарегистрироваться</h3>
        </div>
      </section>
      <ToastContainer />
      {/* <button onClick={notify}>Toasty</button> */}
    </>
  );
};

export default LoginPage;
