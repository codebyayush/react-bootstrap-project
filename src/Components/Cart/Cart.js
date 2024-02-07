import React, { useContext } from "react";
import ItemContext from "../../Store/ItemContext";
import { Card, Button } from "react-bootstrap";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const ctx = useContext(ItemContext);

  return (
    <Modal onClose={props.handleToggle}>
      <Card className="text-light bg-dark" style={{ width: "auto" }}>
        {/* to make it scrollable fix a max height and overflowY will be auto*/}
        <Card.Body
          className="d-flex flex-column"
          style={{ maxHeight: "600px", overflowY: "auto" }}
        >
          <Button
            className="align-self-end bg-danger"
            onClick={() => props.handleToggle(true)}
          >
            X
          </Button>
          <Card.Title className="text-center fs-2">CART</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="me-5 fs-5">
              ITEM <hr />
            </Card.Text>
            <Card.Text className="me-5 fs-5">
              PRICE <hr />
            </Card.Text>
            <Card.Text className="fs-5">
              QUANTITY <hr />
            </Card.Text>
          </div>
          {ctx.cartArr.map((item) => (
            <>
              <div className="d-flex justify-content-between">
                <p className=" w-25">
                  <img src={item.imageUrl} className="w-50 h-50" />
                  <br />
                  {item.title}
                </p>
                <p className="ms-2 mt-1 me-5">₹ {item.price}</p>
                <p>
                  x{ctx.quantity}{" "}
                  <Button
                    className="bg-danger p-1"
                    onClick={() => ctx.removeItemFromCart(item)}
                  >
                    REMOVE
                  </Button>
                </p>
              </div>
              <hr />
            </>
          ))}
          <div className="text-end">
            <h3 className="fw-light">Total: ₹{ctx.totalPrice}</h3>
          </div>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default Cart;