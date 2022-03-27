import React from "react";
import styles from "./Maquette.module.css";

const Maquette = ({ data, isLoggedIn }) => {
  const { img, name } = data;
  return (
    <div className={styles.maquette_item}>
      {isLoggedIn && (
        <div className={styles.maquette_edit}>
          <button className={styles.maquette_buttonDelete}></button>
        </div>
      )}
      <img className={styles.maquette_img} src={img} alt={name} />
    </div>
  );
};

export default Maquette;
