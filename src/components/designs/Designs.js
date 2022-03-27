import React from "react";
import styles from "./Designs.module.css";
import Maquette from "../maquette/Maquette";
import makets from "../../services/makets.json";
import AddButton from "../addButton/AddButton";

const Designs = ({ isLoggedIn, onViewMaquette }) => {
  return (
    <section id="designs" className={styles.designs}>
      <h1 className={styles.designs_title}>
        Designs
        {isLoggedIn && <AddButton />}
      </h1>
      <div className={styles.designs_list}>
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
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Designs;
