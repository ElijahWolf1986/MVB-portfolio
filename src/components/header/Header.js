import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [articles, setArticles] = React.useState([]);
  const [designs, setDesigns] = React.useState([]);

  React.useEffect(() => {
    setArticles(document.getElementById("articles"));
    setDesigns(document.getElementById("designs"));
  }, []);

  return (
    <div>
      <section className={styles.header_section}>
        <div className={styles.header_author_info}>
          <div className={styles.header_author}>
            <div className={styles.header_author_name}>
              {" "}
              <h1 className={styles.header_author_title}> Maria Basova</h1>
            </div>
            <div className={styles.header_author_paragraph}>
              {" "}
              <p className={styles.header_author_item}>mv.basova@gmail.com </p>
              <p className={styles.header_author_item}>|</p>
              <p className={styles.header_author_item}>+79654809881</p>{" "}
            </div>
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
    </div>
  );
};

export default Header;
