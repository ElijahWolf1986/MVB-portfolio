import React from 'react';
import styles from './Designs.module.css';
import Maquette from '../maquette/Maquette';
// import makets from '../../services/makets.json';
import AddButton from '../addButton/AddButton';

const Designs = ({
  isLoggedIn,
  onViewMaquette,
  onDeleteMaquette,
  openAddMaquette,
  maquettes,
}) => {
  return (
    <section id='designs' className={styles.designs}>
      <h1 className={styles.designs_title}>
        Дизайн
        {isLoggedIn && (
          <div onClick={openAddMaquette}>
            <AddButton />
          </div>
        )}
      </h1>
      {maquettes ? (
        <div className={styles.designs_list}>
          {Array.isArray(maquettes) ? (
            maquettes.map((item) => {
              return (
                <Maquette
                  data={item}
                  key={item.name}
                  isLoggedIn={isLoggedIn}
                  onViewMaquette={onViewMaquette}
                  onDeleteMaquette={onDeleteMaquette}
                />
              );
            })
          ) : (
            <Maquette
              data={maquettes}
              key={maquettes.name}
              isLoggedIn={isLoggedIn}
              onViewMaquette={onViewMaquette}
              onDeleteMaquette={onDeleteMaquette}
            />
          )}
        </div>
      ) : (
        <p>макетов нет</p>
      )}

      {/* <div className={styles.designs_list}>
        {makets.lenght === 0 ? (
          <p>Нет макетов</p>
        ) : (
          makets.map((item) => {
            return (
              <Maquette
                data={item}
                key={item.name}
                isLoggedIn={isLoggedIn}
                onViewMaquette={onViewMaquette}
                onDeleteMaquette={onDeleteMaquette}
              />
            );
          })
        )}
      </div> */}
    </section>
  );
};

export default Designs;
