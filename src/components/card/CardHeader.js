import React from "react";
import styles from "./Card.module.css";

export const CardHeader = ({ children }) => {
  return <div class={styles.header}>{children}</div>;
};
