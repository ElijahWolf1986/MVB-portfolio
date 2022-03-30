import React from "react";
import styles from "./About.module.css";

const About = ({ about, isLoggedIn, openEditAbout }) => {
  const { image, title, about1, about2 } = about;
  return (
    <section className={styles.about}>
      {isLoggedIn && (
        <div className={styles.about_edit}>
          <button
            className={styles.about_buttonEdit}
            onClick={openEditAbout}
          ></button>
        </div>
      )}
      <img className={styles.about_img} src={image} alt="author avatar" />
      <div className={styles.about_info}>
        <h1 className={styles.about_title}>
          {" "}
          {title ? title : "Введите заголовок"}{" "}
        </h1>
        <p className={styles.about_paragraph}>
          {about1 ? about1 : "Заполните поле"}
        </p>
        <p className={styles.about_paragraph}>
          {about2 ? about2 : "Заполните поле"}
        </p>
      </div>
    </section>
  );
};

export default About;
