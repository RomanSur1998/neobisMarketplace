import React, { useState } from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import profile from "../../assets/icons/user.svg";
import Modal from "../../components/Modal/ModalPhone";
import ModalCode from "../../components/ModalCode/ModalCode";
import { useDispatch, useSelector } from "react-redux";
import { setUserOwnData, setUserPhoto } from "../../redux/slices/UserSlice";
import styles from "../ProfilePage/ProfilePage.module.scss";
import { useFormik } from "formik";

const ProfilePage = () => {
  const [isActive, setIsActive] = useState();
  const [isCodeModalActive, setIsCodeModalActive] = useState("");
  const dispatch = useDispatch();
  const { phoneNumber, user, user_photo, userOwnData } = useSelector(
    (state) => state.user
  );

  function handleActive() {
    setIsActive(!isActive);
  }

  function handleSetPhoto(params) {
    dispatch(setUserPhoto(params[0]));
    console.log(URL.createObjectURL(params[0]), "user Photo");
  }

  function handleSetUserData(data) {
    dispatch(setUserOwnData(data));
  }

  const formik = useFormik({
    initialValues: {
      name: "2",
      surName: "2",
      login: "2",
      dateOfbirth: "2",
    },
    onSubmit: (values) => {
      console.log(values, "data for profile");
    },
  });
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
            <form onSubmit={formik.handleSubmit}>
              <input
                name="name"
                id="name"
                type="text"
                className={styles.field}
                placeholder="Имя"
                // value={userOwnData ? userOwnData.name : formik.values.name}
                value={formik.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <input
                name="surName"
                id="surName"
                type="text"
                className={styles.field}
                placeholder="Фамилия "
                // value={
                //   userOwnData ? userOwnData.surName : formik.values.surName
                // }
                value={formik.surName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                name="login"
                id="login"
                type="text"
                className={styles.field}
                placeholder="Логин"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // value={
                //   userOwnData.login ? userOwnData.login : formik.values.login
                // }
                value={formik.login}
              />

              <input
                name="dateOfbirth"
                id="dateOfbirth"
                type="text"
                className={styles.field}
                placeholder="Дата рождения "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // value={
                //   userOwnData
                //     ? userOwnData.dateOfbirth
                //     : formik.values.dateOfbirth
                // }
                value={formik.dateOfbirth}
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
