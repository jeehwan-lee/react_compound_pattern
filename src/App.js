import "./App.css";
import { Container } from "./components/container/Container";

function App() {
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
