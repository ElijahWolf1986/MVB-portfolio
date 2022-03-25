import React from "react";
import styles from "./Article.module.css";

const Article = (data) => {
  return (
    <div className={styles.article_item}>
      <a
        target="new_blank"
        href={data.data.articlelink}
        className={styles.article_link}
      >
        <div className={styles.article_overlay}>
          <p className={styles.article_paragraph}>{data.data.title}</p>
        </div>
      </a>
      <img
        className={styles.article_img}
        src={data.data.img}
        alt="article img"
      />
    </div>
  );
};

export default Article;
