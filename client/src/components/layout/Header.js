import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="#" className="nav-link">Log Out</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
