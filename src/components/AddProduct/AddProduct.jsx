import React, { useState } from "react";
import fileDownloader from "../../assets/icons/fileDownloader.svg";
import remove from "../../assets/icons/remove.svg";
import styles from "../AddProduct/AddProduct.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/slices/ProductsSlice";

const AddProduct = ({ handleActiveAddProduct }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      files: [],
      price: "",
      title: "",
      shotDescr: "",
      longDescr: "",
    },
    onSubmit: (value) => {
      // ! ---------------
      const newData = new FormData();
      newData.append("files", value.files);
      newData.append("price", value.price);
      newData.append("name", value.title);
      newData.append("description", value.shotDescr);
      newData.append("description_full", value.longDescr);
      console.log("form data ", newData);
      const fileArray = Object.values(formik.values.files);
      const Data = {
        ...value,
        files: fileArray.map((elem) => {
          return URL.createObjectURL(elem);
        }),
        id: Math.random() * 100,
        reiting: 100,
        name: value.title,
        description: value.shotDescr,
        fullDescription: value.longDescr,
      };
      console.log(Data);
      dispatch(setProduct(Data));
      () => handleActiveAddProduct();
      // ! ---------------
    },
    validationSchema: yup.object({
      price: yup.string().required(),
      title: yup.string().required(),
      shotDescr: yup.string().required(),
      longDescr: yup.string().required(),
    }),
  });
  const fileArray = Object.values(formik.values.files);

  return (
    <div className={styles.modal} onClick={handleActiveAddProduct}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.remove}>
          <img src={remove} alt="" onClick={handleActiveAddProduct} />
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.formBlock}>
            <label htmlFor="files">
              <input
                type="file"
                id="files"
                name="files"
                className={styles.inputFile}
                multiple
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.setFieldValue("files", e.target.files);
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
