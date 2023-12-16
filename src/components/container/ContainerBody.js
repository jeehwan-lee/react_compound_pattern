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
            <Card.HeaderTitle title={coffee.name} />
            {coffee.price && <Card.HeaderPrice price={coffee.price} />}
          </Card.Header>
          <Card.Content content={coffee.content} />
          <Card.Footer>
            <Card.Button
              soldOut={coffee.soldOut}
              render={() => {
                return (
                  <Card.SubContent>
                    <Card.SubButton />
                    <Card.SubButton />
                  </Card.SubContent>
                );
              }}
            ></Card.Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};
