import "./App.css";
import FormView from "./views/form";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="padd-top-5">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormView />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
