import React from "react";
import styles from "./Articles.module.css";
import Article from "../article/Article";
import data from "../../services/data.json";
import AddButton from "../addButton/AddButton";

const Articles = ({
  isLoggedIn,
  openEditArticle,
  deleteArticle,
  openAddArticle,
}) => {
  return (
    <section id="articles" className={styles.articles}>
      <h1 className={styles.articles_title}>
        Статьи
        {isLoggedIn && (
          <div className={styles.articles_add_button} onClick={openAddArticle}>
            <AddButton />{" "}
          </div>
        )}
      </h1>
      <div className={styles.articles_list}>
        {data.lenght === 0 ? (
          <p>Нет статей</p>
        ) : (
          data.map((item) => {
            return (
              <Article
                data={item}
                key={item.name}
                isLoggedIn={isLoggedIn}
                openEditArticle={openEditArticle}
                deleteArticle={deleteArticle}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Articles;
