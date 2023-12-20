import React from "react";
import styles from "./Card.module.css";
import { Card } from "./Card";

export const CardSubContent = ({ children }) => {
  return <div class={styles.subContent}>{children}</div>;
};
