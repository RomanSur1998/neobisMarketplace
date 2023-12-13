import React from "react";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import arrow from "../../assets/icons/arrow.svg";
import open from "../../assets/icons/is-unshow-pass.svg";
import close from "../../assets/icons/is-show-pass.svg";
import card from "../../assets/icons/shoping-card.svg";
import lock from "../../assets/icons/lock.svg";
import styles from "../PasswordPage/PasswordPage.module.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../redux/slices/UserSlice";

const PasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isShowPass } = useSelector((state) => state.user);

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
                  navigate("/registr");
                }}
              />
              <span>Назад</span>
            </div>
            <span>Регистрация </span>
            <img
              src={isShowPass ? open : close}
              alt=""
              onClick={() => {
                dispatch(setShowPass(!isShowPass));
              }}
            />
          </div>
          <div className={styles.form}>
            <img src={lock} alt="" />
            <h3 className={styles.title}>Придумайте пароль</h3>
            <h4 className={styles.description}>
              Минимальная длина — 8 символов. Для надежности пароль должен
              содержать буквы и цифры.
            </h4>
            <PasswordForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordPage;
