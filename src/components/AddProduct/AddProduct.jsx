import React, { useState } from "react";
import fileDownloader from "../../assets/icons/fileDownloader.svg";
import remove from "../../assets/icons/remove.svg";
import styles from "../AddProduct/AddProduct.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setMyproduct, setProduct } from "../../redux/slices/ProductsSlice";
import { getReduxData } from "../../function/getReduxData";
import { getFormData } from "../../function/getFormData";

const AddProduct = ({ handleActiveAddProduct, toastAddProduct }) => {
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
      const id = Math.floor(Math.random() * 100);
      const fileArray = Object.values(formik.values.files);
      getFormData(value);
      dispatch(setProduct(getReduxData({ ...value, id: id }, fileArray)));
      dispatch(setMyproduct(getReduxData({ ...value, id: id }, fileArray)));
      toastAddProduct();
      handleActiveAddProduct();
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
          {/* <input
            className={styles.input}
            type="text"
            placeholder="Полное описание"
            name="longDescr"
            id="longDescr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}
          <textarea
            className={styles.textArea}
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
