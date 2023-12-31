import React, { useState } from "react";
import profileIcon from "../../assets/icons/profile-icon.svg";
import arrowMini from "../../assets/icons/arrow_mini.svg";
import confirmLogout from "../../assets/icons/confirm_logout.svg";
import logout from "../../assets/icons/logout.svg";
import favorites from "../../assets/icons/favorites.svg";
import myProducts from "../../assets/icons/my_products.svg";
import { useNavigate } from "react-router";
import OutModal from "../../components/OutModal/OutModal";
import styles from "../ProfileLayout/ProfileLayouts.module.scss";
import { useSelector } from "react-redux";
import { deleteToken } from "../../helpers/deleteToken";

const ProfileLayouts = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const { user_photo, user } = useSelector((state) => state.user);

  const handleActive = () => {
    setIsActive(!isActive);
  };
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.layoutContainer}>
        <div className={styles.sideBar}>
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className={styles.headersTitile}
          >
            {user_photo ? (
              <img
                src={URL.createObjectURL(user_photo)}
                alt=""
                width={60}
                height={60}
                className={styles.cropper}
              />
            ) : (
              <img src={profileIcon} alt="" />
            )}

            <div>
              <h3>Roman</h3>
              <h4 className={styles.description}>
                {user?.email ? user?.email : "example@gmail.com"}
              </h4>
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
            <div className={styles.iconRow} onClick={handleActive}>
              <img src={logout} alt="" />
              <span>Выйти</span>
            </div>
            <img src={arrowMini} alt="" />
          </div>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </section>
      {isActive ? (
        <OutModal isActive={isActive} handleActive={handleActive}>
          <img src={confirmLogout} alt="" />
          <h3>Вы действительно хотите выйти с приложения?</h3>
          <button
            className={styles.buttonOut}
            onClick={() => deleteToken(navigate)}
          >
            Выйти
          </button>
          <button onClick={handleActive} className={styles.buttonCancel}>
            Отмена
          </button>
        </OutModal>
      ) : null}
    </>
  );
};

export default ProfileLayouts;
