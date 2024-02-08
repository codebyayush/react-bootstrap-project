import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const About = (props) => {
  return (
    <div>
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
              <Nav.Link to="#">Home</Nav.Link>
              <NavLink to="/Store" className=" mt-2 ms-1 me-3">
                Store
              </NavLink>
              <NavLink to="/About" className=" mt-2 ms-1">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1
          className="text-light text-center bg-dark p-5 mt-5 fw-bolder "
          style={{ fontSize: "80px" }}
        >
          The Generics
        </h1>
      </div>
      <h1 className="text-center">ABOUT</h1>
      <div className="w-25 mx-auto">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus ullam repellat nihil dolore, ipsum nesciunt aliquid
          aperiam nobis ipsa voluptate illo molestias voluptates eligendi quas.
          Quae doloribus rem autem magnam. Ipsam cupiditate libero possimus
          nostrum? Consequatur earum asperiores deserunt quis nobis debitis
          necessitatibus dicta mollitia soluta. Provident voluptatum, totam
          mollitia quo a, voluptates, recusandae unde consequatur architecto
          earum ipsa quisquam? Nostrum, blanditiis eaque, quod recusandae quas
          quisquam sunt iure obcaecati accusamus perferendis accusantium vel a
          dolor aliquid nam qui? Earum tenetur itaque in iste laborum magnam
          harum reiciendis placeat id.
        </p>
      </div>
      <div className="d-flex justify-content-between bg-secondary text-white">
        <footer className="fs-1 ps-5 fw-bolder ">The Generics</footer>
        <div className="d-flex">
          <a href="#" className="pointer-event  text-white me-4 mt-3">
            facebook
          </a>
          <a href="#" className="pointer-event  text-white me-4 mt-3">
            youtube
          </a>
          <a href="#" className="pointer-event  text-white me-4 mt-3">
            twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
