import React from "react";
import profileIcon from "../../assets/icons/profile-icon.svg";
import arrowMini from "../../assets/icons/arrow_mini.svg";
import logout from "../../assets/icons/logout.svg";
import favorites from "../../assets/icons/favorites.svg";
import myProducts from "../../assets/icons/my_products.svg";
import styles from "../ProfileLayout/ProfileLayouts.module.scss";
import { useNavigate } from "react-router";

const ProfileLayouts = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.layoutContainer}>
        <div className={styles.sideBar}>
          <div className={styles.headersTitile}>
            <img src={profileIcon} alt="" />
            <div>
              <h3>Roman</h3>
              <h4 className={styles.description}>roman@gmail.com</h4>
            </div>
          </div>
          <div className={styles.favorBlock}>
            <div
              className={styles.line}
              onClick={() => {
                navigate("/favorites");
              }}
            >
              <div className={styles.iconRow}>
                <img src={favorites} alt="" />
                <span>Понравившиеся</span>
              </div>
              <img src={arrowMini} alt="" />
            </div>
            <div
              className={styles.line}
              onClick={() => {
                navigate("/own");
              }}
            >
              <div className={styles.iconRow}>
                <img src={myProducts} alt="" />
                <span>Мои товары</span>
              </div>
              <img src={arrowMini} alt="" />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.iconRow}>
              <img src={logout} alt="" />
              <span>Выйти</span>
            </div>
            <img src={arrowMini} alt="" />
          </div>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </section>
    </>
  );
};

export default ProfileLayouts;
