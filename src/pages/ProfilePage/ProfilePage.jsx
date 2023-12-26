import React, { useState } from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import profile from "../../assets/icons/user.svg";
import Modal from "../../components/Modal/ModalPhone";
import styles from "../ProfilePage/ProfilePage.module.scss";
import ModalCode from "../../components/ModalCode/ModalCode";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [isActive, setIsActive] = useState();
  const [isCodeModalActive, setIsCodeModalActive] = useState("");
  const { phoneNumber, user } = useSelector((state) => state.user);
  console.log("phoneNumber", phoneNumber);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <ProfileLayouts>
      <>
        <Navbar title={"Профиль"} path={"/main"} />
        <section className={styles.container}>
          <img src={profile} width={54} alt="" />
          <h3>Выбрать фотографию</h3>
          <div className={styles.profileData}>
            <form action="submit">
              <input type="text" className={styles.field} placeholder="Имя " />
              <input
                type="text"
                className={styles.field}
                placeholder="Фамилия "
              />
              <input type="text" className={styles.field} placeholder="Логин" />

              <input
                type="text"
                className={styles.field}
                placeholder="Дата рождения "
              />
            </form>
          </div>
          <div className={styles.phoneBlock}>
            <div className={styles.phone}>
              <button className={styles.button} onClick={handleActive}>
                Добавить номер
              </button>
              <h4 className={styles.phoneInput}>
                {phoneNumber ? phoneNumber : "0(000) 000 000"}
              </h4>
            </div>
            {/*! Вставить данный из запроса  */}
            <h4> {user?.email ? user.email : "example@email.com"} </h4>
          </div>
        </section>
        {isActive && (
          <Modal
            isActive={isActive}
            setIsActive={setIsActive}
            setIsCodeModalActive={setIsCodeModalActive}
            isCodeModalActive={isCodeModalActive}
          />
        )}
        {isCodeModalActive ? (
          <ModalCode
            isCodeModalActive={isCodeModalActive}
            setIsCodeModalActive={setIsCodeModalActive}
          />
        ) : null}
      </>
    </ProfileLayouts>
  );
};

export default ProfilePage;
