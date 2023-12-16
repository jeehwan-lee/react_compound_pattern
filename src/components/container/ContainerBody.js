import React from "react";
import styles from "./Container.module.css";
import { Card } from "../card/Card";
import useCoffee from "../../hook/useCoffee";

export const Containerbody = () => {
  const { coffeeList } = useCoffee();
  return (
    <div class={styles.body}>
      {coffeeList.map((coffee) => (
        <Card>
          <Card.Image url={coffee.img} />
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
