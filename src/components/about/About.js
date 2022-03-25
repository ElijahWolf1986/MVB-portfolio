import React from "react";
import styles from "./About.module.css";
import avatar from "../../images/basova.jpg";

const Header = () => {
  const articles = document.getElementById("articles");
  const designs = document.getElementById("designs");

  return (
    <section className={styles.about}>
      <img className={styles.about_img} src={avatar} alt="author avatar" />
      <div className={styles.about_info}>
        <h1 className={styles.about_title}> Об авторе </h1>
        <p className={styles.about_paragraph}>
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className={styles.about_paragraph}>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
};

export default Header;
