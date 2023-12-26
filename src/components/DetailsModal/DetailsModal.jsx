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

const DetailsModal = ({ handleIsActive, elem }) => {
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
          {elem?.files.map((item) => {
            return (
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiperSlide} src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.info}>
          <h3 className="purple_text">{elem?.price} $</h3>
          <div className={styles.likeBlock}>
            <img src={heart} alt="" />
            <span>Нравиться : {elem?.reiting}</span>
          </div>
          <h3>{elem?.name}</h3>
          <p>{elem?.description}</p>
          <h4>Детальное описание</h4>
          <p>{elem?.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
