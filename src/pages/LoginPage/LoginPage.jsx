import React from "react";
import styles from "../LoginPage/LoginPage.module.css";
import card from "../../assets/icons/shoping-card.svg";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card}>
          <img src={card} alt="" />
        </div>
        <div className={styles.form}>
          <div className={styles.headers}>
            <div>Назад</div>
            <h2>Регистрация</h2>
          </div>

          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
