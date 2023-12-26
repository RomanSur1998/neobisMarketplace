import React, { useEffect, useState } from "react";
import contact from "../../assets/icons/contact.svg";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../ModalCode/ModalCode.module.scss";
import { debounce } from "react-axios/lib/utils";
import { useDispatch } from "react-redux";
import { setCode, setPhoneNumber } from "../../redux/slices/UserSlice";

const ModalCode = ({ isCodeModalActive, setIsCodeModalActive }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      setIsCompleted(true);
      setLoading(false);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  function consoler() {
    console.log(value, "value");
    setIsCodeModalActive();
    if (value.length === 4) {
      dispatch(setCode(value));
    }
  }

  return (
    <div
      className={styles.modal}
      onClick={() => {
        setIsCodeModalActive(!isCodeModalActive);
      }}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Изменить номер телефона</h2>
        <img src={contact} alt="" />
        <h3>Введите код из СМС</h3>
        <form onSubmit={() => consoler()}>
          <input
            type="text"
            name=""
            id=""
            placeholder="0 0 0 0 "
            onChange={handleChangeValue}
          />
        </form>

        {!isCompleted ? <span>Повторный запрос</span> : null}

        <div className={styles.loader}>
          {isLoading ? (
            <ClipLoader
              color={"#C0C0C0"}
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : null}{" "}
          {!isCompleted ? <p className="seconds">00.{seconds}</p> : null}
        </div>

        {isCompleted ? (
          <span className={styles.purple}>Отправить код еще раз</span>
        ) : null}
        {/* <span className="red">Неверный код</span> */}
      </div>
    </div>
  );
};

export default ModalCode;
