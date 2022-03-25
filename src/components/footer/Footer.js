import React from "react";
import styles from "./Footer.module.css";

const Footer = (data) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_paragraph}>
        {" "}
        © 2022 MV Basova, Copywriting|Marketing|Design, mv.basova@gmail.com |
        +79654809881{" "}
      </p>
    </footer>
  );
};

export default Footer;
