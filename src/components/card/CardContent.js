import React from "react";
import styles from "./Card.module.css";

export const CardContent = ({ content }) => {
  return <div class={styles.content}>{content}</div>;
};
