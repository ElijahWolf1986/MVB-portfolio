import React from "react";
import styles from "./Articles.module.css";
import articleImg1 from "../../images/articles/text_img1.jpeg";
import articleImg2 from "../../images/articles/text_img2.jpeg";
import articleImg3 from "../../images/articles/text_img3.jpeg";
import articleImg4 from "../../images/articles/text_img4.jpeg";
import articleImg5 from "../../images/articles/text_img5.jpeg";
import articleImg6 from "../../images/articles/text_img6.jpeg";
import articleImg7 from "../../images/articles/text_img7.jpeg";
import articleImg8 from "../../images/articles/text_img8.jpeg";
import articleImg9 from "../../images/articles/text_img9.png";

const Articles = () => {
  return (
    <section className={styles.articles}>
      <h1 className={styles.articles_title}>Articles</h1>
      <div className={styles.articles_list}>
        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg1}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg2}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg3}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg4}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg5}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg6}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg7}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg8}
            alt="article img"
          />
        </div>

        <div className={styles.articles_item}>
          <div className={styles.articles_overlay}>
            <p className={styles.articles_paragraph}>
              Обзор медиарынка во время кризиса Интервью с главой медиахолдинга
              издание "Новости СМИ"{" "}
            </p>
          </div>
          <img
            className={styles.article_img}
            src={articleImg9}
            alt="article img"
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
