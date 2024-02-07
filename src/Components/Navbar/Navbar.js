import React, { useContext } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import ItemContext from "../../Store/ItemContext";

const NavigationBar = (props) => {

  const ctx = useContext(ItemContext)

  return (
    <Navbar
      expand="lg"
      className="navbar-dark bg-dark bg-body-tertiary fixed-top"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#" className="me-5 fw-bolder fs-2">
          Generics
        </Navbar.Brand>
        <Nav className="fs-4">
          <Nav.Link href="#home" className="me-5">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="me-5">
            Store
          </Nav.Link>
          <Nav.Link href="#pricing" className="me-5">
            About
          </Nav.Link>
        </Nav>
        <Button variant="secondary" onClick={() => props.handleToggle(false)}>
          Cart {ctx.totalItems}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
