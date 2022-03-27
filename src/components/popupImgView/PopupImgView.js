import React from "react";
import styles from "./PopupImgView.module.css";
import Popup from "../Popup/Popup";

const PopupImgView = ({ isPopupOpen, onClose, maquette }) => {
  return (
    <Popup isPopupOpen={isPopupOpen} onClose={onClose}>
      <img
        className={styles.popupview_img}
        src={maquette.img}
        alt={maquette.name}
      />
    </Popup>
  );
};

export default PopupImgView;
