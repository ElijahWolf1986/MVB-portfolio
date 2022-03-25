import React from "react";
import styles from "./Header.module.css";
// import logoCompany from "../../images/vega_blue.png";
// import { Link } from "react-router-dom";

const Header = () => {
  const articles = document.getElementById("articles");
  const designs = document.getElementById("designs");

  return (
    <div>
      <section className={styles.header_section}>
        <div className={styles.header_author_info}>
          <div className={styles.header_author}>
            <div className={styles.header_author_name}>
              {" "}
              {/* <div className={styles.header_author_logo}>logo</div> */}
              <h1 className={styles.header_author_title}> Maria Basova</h1>
            </div>
            <p className={styles.header_author_paragraph}>
              {" "}
              <p className={styles.header_author_item}>mv.basova@gmail.com </p>
              <p className={styles.header_author_item}>|</p>
              <p className={styles.header_author_item}>+79654809881</p>{" "}
            </p>
          </div>
          <menu className={styles.header_menu}>
            <ul className={styles.header_menu_list}>
              <li
                className={styles.header_menu_item}
                onClick={() => {
                  articles &&
                    articles.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                }}
              >
                Articles
              </li>
              <li className={styles.header_menu_item_special}> | </li>
              <li
                className={styles.header_menu_item}
                onClick={() => {
                  designs &&
                    designs.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                }}
              >
                {" "}
                Designs
              </li>
            </ul>
          </menu>
        </div>
        <h2 className={styles.header_title}>Copywriting|Marketing|Design</h2>
      </section>

      {/* <section id="articles" className={styles.articles}>
        <p>Статьи</p>
      </section>
      <section id="designs" className={styles.articles}>
        Дизайн
      </section>
      <section id="footer" className={styles.articles}>
        футер
      </section> */}
    </div>
  );
};

export default Header;
