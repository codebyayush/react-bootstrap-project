import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../../Store/ItemContext";
import { Row, Col, Image, Container, Button, ListGroup } from "react-bootstrap";
import NavigationBar from "../Navbar/Navbar";
import ReactImageMagnify from "react-image-magnify";
import Cart from "../Cart/Cart";

const SingleItem = () => {
  const ctx = useContext(ItemContext);

  const [toggle, setToggle] = useState(false);
  const toggleHandler = (bool) => {
    if (bool === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const { productId } = useParams();
  const product = ctx.itemArr.find((item) => item.id === Number(productId));
  const { title, images, desc, rating } = product;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <NavigationBar handleToggle={toggleHandler} />
      <Container className="pt-5">
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <div className="imgDiv">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product",
                    isFluidWidth: true,
                    src: selectedImage,
                  },
                  largeImage: {
                    src: selectedImage,
                    width: 1200,
                    height: 1800,
                  },
                  enlargedImagePosition: "over",
                }}
              />
              <div className="image-thumbnails">
                {images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Thumbnail ${index}`}
                    className="img-thumbnail"
                    onClick={() => handleImageClick(imgUrl)}
                    style={{
                      margin: "0 10px 10px 0",
                      maxWidth: "100px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5 className="mt-3 fs-1">{title}</h5>
            <p className="fs-5">{desc}</p>
            <Button
              variant="primary"
              onClick={() => ctx.addItemToCart(product)}
            >
              Add to Cart
            </Button>
            <Col xs={12}>
              <h3 className="mt-4">Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <ListGroup variant="flush">
                  {product.reviews.map((review, index) => (
                    <ListGroup.Item key={index}>
                      <h5>{review.name}</h5>
                      <p>Rating: {"⭐".repeat(review.rating)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No reviews yet.</p>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
      {toggle && <Cart handleToggle={toggleHandler} />}
    </>
  );
};

export default SingleItem;