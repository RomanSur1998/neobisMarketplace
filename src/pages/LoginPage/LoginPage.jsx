import React from "react";
import styles from "../LoginPage/LoginPage.module.scss";
import card from "../../assets/icons/shoping-card.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { toaster } from "../../helpers/toastifyHelpers";

const LoginPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card}>
          <img src={card} alt="" />
        </div>
        <div className={styles.form}>
          <LoginForm uncorrectUser={toaster.uncorrectUser} />
          <Link to={"/registr"} className={styles.purpule}>
            Зарегистрироваться
          </Link>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
