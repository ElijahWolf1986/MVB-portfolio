import React from "react";
import styles from "./Articles.module.css";
import Article from "../article/Article";
import data from "../../services/data.json";

const Articles = () => {
  return (
    <section id="articles" className={styles.articles}>
      <h1 className={styles.articles_title}>Articles</h1>
      <div className={styles.articles_list}>
        {data.lenght === 0 ? (
          <p>Нет статей</p>
        ) : (
          data.map((item) => {
            return <Article data={item} key={item.name} />;
          })
        )}
      </div>
    </section>
  );
};

export default Articles;
