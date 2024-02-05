import React from "react";
import Card from "react-bootstrap/Card";
import ItemContext from "../../Store/ItemContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const ItemsList = () => {
  const ctx = useContext(ItemContext);

  return (
    <div className="d-flex justify-content-around mt-2">
      {ctx.itemArr.map((item) => (
        <Card className="mx-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <div>Rs {item.price}</div>
          </Card.Body>
          <Card.Body>
            <Button varient="success">Add Item</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemsList;
