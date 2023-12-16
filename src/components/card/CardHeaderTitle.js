import React from "react";
import styles from "./Card.module.css";

export const CardHeaderTitle = ({ title }) => {
  return <div class={styles.headerTitle}>{title}</div>;
};
