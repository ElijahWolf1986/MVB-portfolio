import React from "react";
import styles from "./Maquette.module.css";
import Popup from "../Popup/Popup";

const Maquette = ({ data, isLoggedIn, onViewMaquette }) => {
  const { img, name } = data;
  const handleView = () => {
    onViewMaquette(data);
  };
  return (
    <div className={styles.maquette_item}>
      {isLoggedIn && (
        <div className={styles.maquette_edit}>
          <button className={styles.maquette_buttonDelete}></button>
        </div>
      )}
      <img
        className={styles.maquette_img}
        src={img}
        alt={name}
        onClick={handleView}
      />
    </div>
  );
};

export default Maquette;
