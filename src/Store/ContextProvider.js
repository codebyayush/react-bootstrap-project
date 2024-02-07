import React, { useState } from "react";
import ItemContext from "./ItemContext";

const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([
    {
      id: Math.random(),
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: Math.random(),
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: Math.random(),
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const [itemArr, setItemArr] = useState([
    {
      id: 0,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 1,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 2,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 3,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: 5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },

    {
      id: 6,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: 5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]);

  const removeItemHandler = (item) => {
    return setCartItem((prevItem) => {
      const updatedList = prevItem.filter((items) => items.id !== item.id);
      return updatedList;
    });
  };

  const addItemHandler = () => {
    
  }

  const totalPrice = cartItem.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);

  const totalItems = cartItem.length;

  const context = {
    itemArr: itemArr,
    cartArr: cartItem,
    totalPrice: totalPrice,
    totalItems: totalItems,
    quantity: 1,
    addItemToCart: addItemHandler,
    removeItemFromCart: removeItemHandler,
  };

  return (
    <ItemContext.Provider value={context}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ContextProvider;
