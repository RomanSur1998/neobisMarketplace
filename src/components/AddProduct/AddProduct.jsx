import React, { useState } from "react";
import fileDownloader from "../../assets/icons/fileDownloader.svg";
import remove from "../../assets/icons/remove.svg";
import styles from "../AddProduct/AddProduct.module.scss";

const AddProduct = () => {
  const [file, setFile] = useState([]);
  const fileArray = Object.values(file);
  console.log(Object.values(file), "file");

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div>
          <img src={remove} alt="" />
        </div>
        <form action="" className={styles.form}>
          <div className={styles.formBlock}>
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                className={styles.inputFile}
                multiple
                onChange={(e) => {
                  setFile(e.target.files);
                }}
              />
              <img src={fileDownloader} alt="" className={styles.imgLoad} />
            </label>
            <div className={styles.preview}>
              {fileArray
                ? fileArray.map((elem, index) => {
                    return (
                      <img
                        src={URL.createObjectURL(elem)}
                        alt=""
                        width={76}
                        height={96}
                        key={index}
                        className={styles.imgPreviw}
                      />
                    );
                  })
                : null}
            </div>
          </div>
          <input className={styles.input} type="text" placeholder="Цена" />
          <input className={styles.input} type="text" placeholder="Название" />
          <input
            className={styles.input}
            type="text"
            placeholder="Краткое описание"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Полное описание"
          />
          <button className="button purple" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
