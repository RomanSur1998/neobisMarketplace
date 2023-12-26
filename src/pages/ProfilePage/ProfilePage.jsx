import React, { useState } from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import profile from "../../assets/icons/user.svg";
import Modal from "../../components/Modal/ModalPhone";
import ModalCode from "../../components/ModalCode/ModalCode";
import { useDispatch, useSelector } from "react-redux";
import { setUserPhoto } from "../../redux/slices/UserSlice";

import styles from "../ProfilePage/ProfilePage.module.scss";
import { Cropper } from "react-cropper";

const ProfilePage = () => {
  const [isActive, setIsActive] = useState();
  const [isCodeModalActive, setIsCodeModalActive] = useState("");
  const dispatch = useDispatch();
  const { phoneNumber, user, user_photo } = useSelector((state) => state.user);

  function handleActive() {
    setIsActive(!isActive);
  }

  function handleSetPhoto(params) {
    dispatch(setUserPhoto(params[0]));
    console.log(URL.createObjectURL(params[0]), "user Photo");
  }

  return (
    <ProfileLayouts>
      <>
        <Navbar title={"Профиль"} path={"/main"} />
        <section className={styles.container}>
          {user_photo ? (
            <img
              src={URL.createObjectURL(user_photo)}
              width={54}
              height={54}
              alt=""
              className={styles.cropper}
            />
          ) : (
            // <Cropper
            //   src={URL.createObjectURL(user_photo)}
            //   style={{ height: 54, width: 54 }}
            //   guides={false}
            // />
            <img src={profile} width={54} alt="" />
          )}

          <label htmlFor="file">
            <input
              type="file"
              id="file"
              className={styles.file}
              onChange={(e) => handleSetPhoto(e.target.files)}
            />

            <h3>Выбрать фотографию</h3>
          </label>

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
