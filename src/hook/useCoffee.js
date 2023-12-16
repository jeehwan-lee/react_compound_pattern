import { useEffect, useState } from "react";
import { fetchCoffeeList } from "../api/coffeeApi";

export const useCoffee = () => {
  const [coffeeList, setCoffeeList] = useState([]);

  const getCoffeeList = async () => {
    try {
      const data = await fetchCoffeeList();
      setCoffeeList(data);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  return { coffeeList };
};
