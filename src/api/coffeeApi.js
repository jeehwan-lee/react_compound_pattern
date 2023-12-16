import coffeeData from "../db/coffeeData.json";

export const fetchCoffeeList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(coffeeData);
    }, 200);
  });
};
