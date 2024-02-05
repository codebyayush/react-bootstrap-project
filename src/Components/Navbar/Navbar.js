import React from 'react'
import { Nav, Navbar, Button, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#" className="me-5 fw-bolder fs-2">
          Generics
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Button variant="secondary">Cart 0</Button>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;