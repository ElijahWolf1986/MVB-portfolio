import React from 'react';
import styles from './Maquette.module.css';

const Maquette = ({ data, isLoggedIn, onViewMaquette, onDeleteMaquette }) => {
  const { name, image } = data;
  const handleView = () => {
    onViewMaquette(data);
  };
  const handleDeleteMaquette = () => {
    onDeleteMaquette(data);
  };
  return (
    <div className={styles.maquette_item}>
      {isLoggedIn && (
        <div className={styles.maquette_edit}>
          <button
            className={styles.maquette_buttonDelete}
            onClick={handleDeleteMaquette}
          ></button>
        </div>
      )}
      <img
        className={styles.maquette_img}
        src={image}
        alt={name}
        onClick={handleView}
      />
    </div>
  );
};

export default Maquette;
