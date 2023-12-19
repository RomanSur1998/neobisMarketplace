import React from "react";
import remove from "../../assets/icons/remove.svg";
import boots from "../../assets/pictures/boots.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "../EditModal/EditModal.module.scss";

const EditModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.close}>
          <img src={remove} alt="" />
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.swiperSlide} src={boots} alt="" />
          </SwiperSlide>
        </Swiper>

        <form action="" className={styles.info}>
          <input type="text" name="" id="" className={styles.input} />
          <input type="text" name="" id="" className={styles.input} />
          <input type="text" name="" id="" className={styles.input} />
          <input type="text" name="" id="" className={styles.input} />
          <button className={styles.AddbuttonPurple}>Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
