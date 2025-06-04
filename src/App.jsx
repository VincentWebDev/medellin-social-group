import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/custom.scss";
// import "./css/App.scss";
// import "./css/App.css";
// import "./css/index.css";

function App() {
  const now = 20;
  return (
    <div className="bg-light h-100">
      <Container>
        <Header></Header>
        <Hero></Hero>

        <Container className="d-flex h-25  justify-content-center align-items-center">
          <Row className="d-flex w-75">
            <Col>
              <h1 className="display-4 d-flex justify-content-center">
                Próximamente
              </h1>

              <ProgressBar now={now} label={`${now}%`} visuallyHidden />
              <p className="display-6">20%</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
