import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import "./App.css";

function App() {
  const now = 10;
  return (
    <Container className="d-flex h-100 justify-content-center align-items-center">
      <Row>
        <Col>
          <h1>Próximamente</h1>
          <ProgressBar now={now} label={`${now}%`} visuallyHidden />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
