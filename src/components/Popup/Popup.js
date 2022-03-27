import React from "react";
import styles from "./Popup.module.css";

const Popup = (props) => {
  return (
    <section
      className={`${styles.popup} ${props.isPopupOpen && styles.popup_open}`}
    >
      <div className={styles.popup_overlay}></div>
      <div className={styles.popup_container}>
        <button
          type="button"
          className={styles.popup_close_button}
          onClick={props.onClose}
        ></button>
        {props.children}
      </div>
    </section>
  );
};

export default Popup;
