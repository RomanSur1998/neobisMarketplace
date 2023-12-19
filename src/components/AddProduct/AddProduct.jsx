import React, { useState } from "react";
import fileDownloader from "../../assets/icons/fileDownloader.svg";
import remove from "../../assets/icons/remove.svg";
import styles from "../AddProduct/AddProduct.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";

const AddProduct = ({ handleActiceAddProduct }) => {
  const formik = useFormik({
    initialValues: {
      file: [],
      price: "",
      title: "",
      shotDescr: "",
      longDescr: "",
    },
    onSubmit: (value) => {
      const formData = new FormData();
      formData.append("files", value.file);
      formData.append("price", value.price);
      formData.append("name", value.title);
      formData.append("description", value.shotDescr);
      formData.append("description_full", value.longDescr);
      console.log(value);
    },
    validationSchema: yup.object({
      price: yup.string().required(),
      title: yup.string().required(),
      shotDescr: yup.string().required(),
      longDescr: yup.string().required(),
    }),
  });
  const fileArray = Object.values(formik.values.file);

  return (
    <div className={styles.modal} onClick={handleActiceAddProduct}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.remove}>
          <img src={remove} alt="" onClick={handleActiceAddProduct} />
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.formBlock}>
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                name="file"
                className={styles.inputFile}
                multiple
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.setFieldValue("file", e.target.files);
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
          <input
            className={styles.input}
            type="text"
            placeholder="Цена"
            name="price"
            id="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Название"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Краткое описание"
            name="shotDescr"
            id="shotDescr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Полное описание"
            name="longDescr"
            id="longDescr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            className={
              !formik.isValid ? styles.AddbuttonGray : styles.AddbuttonPurple
            }
            type="submit"
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
