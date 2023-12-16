import React from "react";
import styles from "./Card.module.css";

export const CardSubContent = ({ children }) => {
  return <div class={styles.subContent}>{children}</div>;
};
