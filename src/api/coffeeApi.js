import coffeeData from "../db/coffeeData.json";

export const getCoffeeList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(coffeeData);
    }, 1000);
  });
};
