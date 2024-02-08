import React from "react";
import { Button } from "react-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="navbar-light bg-light bg-body-tertiary fixed-top "
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#" className="me-5 fw-bolder fs-2">
            Generics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="fs-5 ">
              <NavLink to="/Home" className=" mt-1 ms-1 me-3">
                Home
              </NavLink>
              <NavLink to="/Store" className=" mt-1 ms-1 me-3">
                Store
              </NavLink>
              <NavLink to="/About" className=" mt-1 ms-1">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="h-75 bg-secondary p-2">
        <h1
          className="mt-5 text-center p-5 text-white"
          style={{ fontSize: "80px" }}
        >
          The Generics
        </h1>
        <h1 className="fs-1 border mx-auto w-50 text-center text-warning">
          Get our latest Album
        </h1>
      </div>
      <h2 className="text-center mt-4 fw-bold">TOURS</h2>
      <div className="d-flex justify-content-center">
        <div className="w-75 d-flex justify-content-around mt-4">
          <p>JUL16</p>
          <p>DETROIT, MI</p>
          <p>DTE MUSIC THEATRE</p>
          <Button className="bg-primary">BUY TICKET</Button>
        </div>
      </div>
      <hr className="w-75 mx-auto align-items-center" />
      <div className="d-flex justify-content-center">
        <div className="w-75 d-flex justify-content-around">
          <p>JUL19</p>
          <p>TORONTO,ON</p>
          <p>BUDWEISER STAGE</p>
          <Button className="bg-primary">BUY TICKET</Button>
        </div>
      </div>
      <hr className="w-75 mx-auto align-items-center" />
      <div className="d-flex justify-content-center">
        <div className="w-75 d-flex justify-content-around">
          <p>JUL 22</p>
          <p>BRISTOW, VA</p>
          <p>JIGGY LUBE LIVE</p>
          <Button className="bg-primary">BUY TICKET</Button>
        </div>
      </div>
      <hr className="w-75 mx-auto align-items-center" />
      <div className="d-flex justify-content-center">
        <div className="w-75 d-flex justify-content-around">
          <p>JUL 29</p>
          <p>PHOENIX, AZ</p>
          <p>AK-CHIN PAVILION</p>
          <Button className="bg-primary">BUY TICKET</Button>
        </div>
      </div>
      <hr className="w-75 mx-auto align-items-center" />
      <footer className="fs-1 ps-5 fw-bolder bg-dark text-light ">
        The Generics
      </footer>
    </React.Fragment>
  );
};

export default Home;
