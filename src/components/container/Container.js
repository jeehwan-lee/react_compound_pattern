import React from "react";
import styles from "./Container.module.css";
import { Card } from "../card/Card";

const ContainerMain = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};

const ContainerHeader = () => {
  return <div class={styles.header}>Coffee</div>;
};

const Containerbody = () => {
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
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export const Container = Object.assign(ContainerMain, {
  Header: ContainerHeader,
  Body: Containerbody,
});
