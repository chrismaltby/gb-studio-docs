import React from "react";
import styles from "./styles.module.css";

export const Swatch = ({ color }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.swatch} style={{ backgroundColor: color }} />
      <div className={styles.label}>{color}</div>
    </div>
  );
};
