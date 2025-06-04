import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";
import "./css/custom.scss";
import "./App.css";

function App() {
  const now = 10;
  return (
    <>
      <Container>
        <Header></Header>
      </Container>
      <Container className="d-flex h-100  justify-content-center align-items-center">
        <Row className="d-flex w-75">
          <Col>
            <h1 className="display-1 d-flex justify-content-center">
              Próximamente
            </h1>

            <ProgressBar now={now} label={`${now}%`} visuallyHidden />
            <p className="display-6">15%</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
