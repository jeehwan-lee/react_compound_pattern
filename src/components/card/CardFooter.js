import React from "react";
import styles from "./Card.module.css";

export const CardFooter = ({ children }) => {
  return <div class={styles.footer}>{children}</div>;
};
