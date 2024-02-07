import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <div className="h-75">
        <h1 className="fs-1">The Generics</h1>
        <h1 className="fs-1 border-2">Get our latest Album</h1>
      </div>
      <div>
        <h2>TOURS</h2>
        <div>
          <p>date</p>
          <p>city</p>
          <p>Location</p>
          <Button className="bg-primary">BUY TICKET</Button>
        </div>
        <hr />
      </div>
      <footer className="fw-light bg-dark">The Generics</footer>
    </React.Fragment>
  );
};

export default Home;