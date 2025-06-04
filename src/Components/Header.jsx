import { Container, Navbar, Nav } from "react-bootstrap";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";

export default function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Grupo Social Medellín</Navbar.Brand>
          <Nav>
            <Nav.Link
              href="https://www.instagram.com/medellinsocialgroup"
              target="_blank"
            >
              <Instagram />
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/groups/medellinsocialgroup"
              target="_blank"
            >
              <Facebook />
            </Nav.Link>
            <Nav.Link
              href="https://chat.whatsapp.com/Cg1ruHVZxa37QXsYn2aucR"
              target="_blank"
            >
              <Whatsapp />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
