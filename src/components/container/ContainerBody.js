import React from "react";
import styles from "./Container.module.css";
import { Card } from "../card/Card";

export const Containerbody = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div class={styles.body}>
      {arr.map((item) => (
        <Card>
          <Card.Image />
          <Card.Header>
            <Card.HeaderTitle />
            <Card.HeaderPrice />
          </Card.Header>
          <Card.Content />
          <Card.Footer>
            <Card.Button />
            <Card.SubContent>
              <Card.SubButton />
              <Card.SubButton />
            </Card.SubContent>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};
