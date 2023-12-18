import React from "react";
import remove from "../../assets/icons/remove.svg";
import boots from "../../assets/pictures/boots.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import heart from "../../assets/icons/heart.svg";
import styles from "../DetailsModal/DetailsModal.module.scss";

const DetailsModal = ({ handleIsActive }) => {
  return (
    <div className={styles.modal} onClick={handleIsActive}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <img onClick={handleIsActive} src={remove} alt="" />
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
        <div className={styles.info}>
          <h3 className="purple_text">12000 сом</h3>
          <div className={styles.likeBlock}>
            <img src={heart} alt="" />
            <span>Нравиться : 1 M</span>
          </div>
          <h3>Adidas Yeezy 500</h3>
          <p>
            The Yeezy 500 Blush is a limited edition shoe designed by Kanye West
            for Adidas
          </p>
          <h4>Детальное описание</h4>
          <p>
            It features a unique design, with a chunky silhouette and a blush
            colorway. The shoe has a mix of suede, mesh and leather, and it's
            considered a highly sought-after item among shoe enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
