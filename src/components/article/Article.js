import React from "react";
import styles from "./Article.module.css";

const Article = ({ data, isLoggedIn, openEditArticle }) => {
  const { articlelink, title, img } = data;
  const handleViewArticleInfo = () => {
    openEditArticle(data);
  };
  return (
    <div className={styles.article_item}>
      {isLoggedIn && (
        <div className={styles.article_edit}>
          <button
            className={styles.article_buttonEdit}
            onClick={handleViewArticleInfo}
          ></button>
          <button className={styles.article_buttonDelete}></button>
        </div>
      )}

      <a target="new_blank" href={articlelink} className={styles.article_link}>
        <div className={styles.article_overlay}>
          <p className={styles.article_paragraph}>{title}</p>
        </div>
      </a>
      <img className={styles.article_img} src={img} alt="article img" />
    </div>
  );
};

export default Article;
