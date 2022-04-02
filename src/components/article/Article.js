import React from 'react';
import styles from './Article.module.css';

const Article = ({ data, isLoggedIn, openEditArticle, deleteArticle }) => {
  const { title, image, link, subtitle } = data;
  const handleViewArticleInfo = () => {
    openEditArticle(data);
  };
  const handleDeletArticle = () => {
    deleteArticle(data);
  };
  return (
    <div className={styles.article_item}>
      {isLoggedIn && (
        <div className={styles.article_edit}>
          <button
            className={styles.article_buttonEdit}
            onClick={handleViewArticleInfo}
          ></button>
          <button
            className={styles.article_buttonDelete}
            onClick={handleDeletArticle}
          ></button>
        </div>
      )}

      <a target='new_blank' href={link} className={styles.article_link}>
        <div className={styles.article_overlay}>
          <p className={styles.article_title}>{title}</p>
          <p className={styles.article_paragraph}>{subtitle}</p>
        </div>
      </a>
      <img className={styles.article_img} src={image} alt='article img' />
    </div>
  );
};

export default Article;
