import "./App.css";
import { Container } from "./components/container/Container";

function App() {
  return (
    <div class="main">
      <Container>
        <Container.header></Container.header>
        <Container.body></Container.body>
      </Container>
    </div>
  );
}

export default App;
