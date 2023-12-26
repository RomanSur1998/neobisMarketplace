import React, { useEffect } from "react";
import remove from "../../assets/icons/remove.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "../EditModal/EditModal.module.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  setApdateMyProduct,
  setApdateProduct,
} from "../../redux/slices/ProductsSlice";

const EditModal = ({ handleEditActive, elem, handleIsSelect }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      files: elem.files,
      price: elem.price,
      title: elem.name,
      shotDescr: elem.description,
      longDescr: elem.fullDescription,
    },
    onSubmit: (values) => {
      dispatch(
        setApdateProduct({
          ...elem,
          price: values.price,
          name: values.title,
          description: values.shotDescr,
          fullDescription: values.longDescr,
        })
      );
      dispatch(
        setApdateMyProduct({
          ...elem,
          price: values.price,
          name: values.title,
          description: values.shotDescr,
          fullDescription: values.longDescr,
        })
      );
      handleEditActive();
    },
  });
  return (
    <div className={styles.modal} onClick={handleEditActive}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <img src={remove} alt="" onClick={handleEditActive} />
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {elem?.files.map((item) => {
            return (
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiperSlide} src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <form onSubmit={formik.handleSubmit} className={styles.info}>
          <input
            type="text"
            name="price"
            id="price"
            className={styles.input}
            value={formik.values.price}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="title"
            id="title"
            className={styles.input}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="shotDescr"
            id="shotDescr"
            className={styles.input}
            value={formik.values.shotDescr}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="longDescr"
            id="longDescr"
            className={styles.input}
            value={formik.values.longDescr}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <button className={styles.AddbuttonPurple} type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
