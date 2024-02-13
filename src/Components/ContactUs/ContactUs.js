import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const numberOnChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e, name, email, phone) => {
    e.preventDefault()

    if (name === "" || email === "" || phone === "") {
      return;
    }

    const newUser = {
      name: name,
      email: email,
      phone: phone,
    };

    const response = await fetch(
      "https://react-http-project-92df1-default-rtdb.firebaseio.com/userinfo.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      console.log("User added successfully");
    } else {
      const errorData = await response.json();
      console.error("Failed to add user:", errorData);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="navbar-light bg-light bg-body-tertiary fixed-top"
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
              <NavLink to="/About" className=" mt-1 ms-1 me-3">
                About
              </NavLink>
              <NavLink to="/contactus" className=" mt-1 ms-1">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card
        className="mx-auto w-25 p-3"
        style={{
          marginTop: "100px",
          border: "1px solid blue",
          borderRadius: "20px",
        }}
      >
        <Form onSubmit={(e) => submitHandler(e, name, email, phone)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={nameOnChangeHandler}
              value={name}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={emailOnChangeHandler}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              value={phone}
              onChange={numberOnChangeHandler}
              placeholder="enter number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default ContactUs;
