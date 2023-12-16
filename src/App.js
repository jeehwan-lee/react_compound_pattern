import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "./components/container/Container";
import { getCoffeeList } from "./api/coffeeApi";

function App() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    getCoffeeList().then((data) => {
      console.log(data);
      setCoffeeList(data);
    });
  }, []);
  return (
    <div class="main">
      <Container>
        <Container.Header></Container.Header>
        <Container.Body></Container.Body>
      </Container>
    </div>
  );
}

export default App;
