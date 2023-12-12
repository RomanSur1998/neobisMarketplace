import React from "react";
import card from "../../assets/icons/shoping-card.svg";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import arrow from "../../assets/icons/arrow.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "../RegistrPage/RegistrationPage.module.scss";

const RegistrationPage = () => {
  const navigate = useNavigate();

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
            <div></div>
            <div></div>
          </div>
          <div className={styles.form}>
            <RegistrationForm />{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
