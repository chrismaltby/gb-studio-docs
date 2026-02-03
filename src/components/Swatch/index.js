import React from "react";
import styles from "./styles.module.css";

export const Swatch = ({ color, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.swatch}>
        <div className={styles.color} style={{ backgroundColor: color }} />
        <div className={styles.label}>{color}</div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
