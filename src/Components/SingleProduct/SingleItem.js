import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../../Store/ItemContext";

const SingleItem = () => {
  const ctx = useContext(ItemContext);

  const { productId } = useParams();

  const product = ctx.itemArr.find((item) => item.id === Number(productId));

  const { title, imageUrl, imageUrl1, desc } = product;

  return (
    <>
      <div className="m-5 product d-flex justify-content-around">
        <div className="imgDiv">
          <img src={imageUrl} alt="image" />
          <img
            src={imageUrl1}
            alt="image"
            style={{ height: "70px", width: "70px", margin: "20px" }}
          />
          <h5>{title}</h5>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default SingleItem;