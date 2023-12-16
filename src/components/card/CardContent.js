import React from "react";
import styles from "./Card.module.css";

export const CardContent = () => {
  return (
    <div class={styles.content}>
      이곳은 커피에 대한 정보를 담는곳으로 아주 긴 문장이 올 수도 있고
      그렇습니다. 기네요
    </div>
  );
};
