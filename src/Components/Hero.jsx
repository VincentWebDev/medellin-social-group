import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.scss";
import "../css/App.scss";

export default function Hero() {
  return (
    <Container
      className="d-flex h-50
      justify-content-center align-items-center"
    >
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="display-1">Medallo</h1>
        </Col>
      </Row>
    </Container>
  );
}
