import React from 'react';
import styles from './Articles.module.css';
import Article from '../article/Article';
import AddButton from '../addButton/AddButton';

const Articles = ({
  isLoggedIn,
  openEditArticle,
  deleteArticle,
  openAddArticle,
  data,
}) => {
  return (
    <section id='articles' className={styles.articles}>
      <h1 className={styles.articles_title}>
        Статьи
        {isLoggedIn && (
          <div className={styles.articles_add_button} onClick={openAddArticle}>
            <AddButton />{' '}
          </div>
        )}
      </h1>
      {data ? (
        <div className={styles.articles_list}>
          {Array.isArray(data) ? (
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
          ) : (
            <Article
              data={data}
              key={data.name}
              isLoggedIn={isLoggedIn}
              openEditArticle={openEditArticle}
              deleteArticle={deleteArticle}
            />
          )}
        </div>
      ) : (
        <p>статей нет</p>
      )}

      {/* <div className={styles.articles_list}>
        {!Array.isArray(data) ? (
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
      </div> */}
    </section>
  );
};

export default Articles;
