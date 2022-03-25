import React from "react";
import styles from "./Maquette.module.css";

const Maquette = (data) => {
  return (
    <div className={styles.maquette_item}>
      <img
        className={styles.maquette_img}
        src={data.data.img}
        alt={data.data.name}
      />
    </div>
  );
};

export default Maquette;
