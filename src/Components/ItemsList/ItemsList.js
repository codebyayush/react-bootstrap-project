import React from "react";
import Card from "react-bootstrap/Card";
import ItemContext from "../../Store/ItemContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const ItemsList = () => {
  const ctx = useContext(ItemContext);

  return (
    <React.Fragment>
      <h1
        className="text-center fst-italic"
        style={{ marginBottom: "-20px", marginTop: "5rem" }}
      >
        Music
      </h1>
      <div className="d-flex flex-wrap justify-content-around mt-5">
        {ctx.itemArr.map((item, index) => (
          <React.Fragment key={index}>
            <Card className="mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div>Rs {item.price}</div>
              </Card.Body>
              <Card.Body>
                <Button
                  variant="success"
                  onClick={() => ctx.addItemToCart(item)}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
            {/* Add a line break after every fourth item */}
            {(index + 1) % 4 === 0 && (
              <Card className="w-100 m-4" style={{ width: "18rem" }}></Card>
            )}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
export default ItemsList;
