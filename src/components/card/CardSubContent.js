import React from "react";
import styles from "./Card.module.css";
import { Card } from "./Card";

export const CardSubContent = ({ subContent }) => {
  return (
    <div class={styles.subContent}>
      {subContent &&
        subContent.map((content) => <Card.SubButton content={content} />)}
    </div>
  );
};
