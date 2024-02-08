import React, { useContext } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import ItemContext from "../../Store/ItemContext";

const NavigationBar = (props) => {
  const ctx = useContext(ItemContext);

  return (
    <Navbar
      expand="lg"
      className="navbar-dark bg-dark bg-body-tertiary fixed-top "
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#" className="me-5 fw-bolder fs-2">
          Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="fs-5 ">
            <Nav.Link href="#home" className="">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="">
              Store
            </Nav.Link>
            <Nav.Link href="#pricing" className="">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="secondary" onClick={() => props.handleToggle(false)}>
          Cart {ctx.totalItems}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
