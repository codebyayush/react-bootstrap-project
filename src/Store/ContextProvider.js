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
        quantity: 1,
      },

    {
      id: 1,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
      },

    {
      id: 2,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
      },

    {
      id: 3,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
    {
      id: 5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },

    {
      id: 6,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
    {
      id: 5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
  ]);

  const removeItemHandler = (item) => {
    return setCartItem((prevItem) => {
      const updatedList = prevItem.filter((items) => items.id !== item.id);
      return updatedList;
    });
  };

  const addItemHandler = (item) => {
    const existingItemIndex = cartItem.findIndex(
      (items) => items.id === item.id
    );

    if (existingItemIndex !== -1) {
      setCartItem((prevItems) => {
        const newList = [...prevItems];
        let newListAmount = newList[existingItemIndex].quantity;
        const newAmount = newListAmount + 1;
        newList[existingItemIndex].quantity = newAmount;
        return newList;
      });
    } else {
      return setCartItem((prevItems) => {
        return [...prevItems, item];
      });
    }
  };

  const totalPrice = cartItem.reduce((acc, curr) => {
    acc += Number(curr.quantity)*Number(curr.price);
    return acc;
  }, 0);

  const totalItems = cartItem.length;

  const context = {
    itemArr: itemArr,
    cartArr: cartItem,
    totalPrice: totalPrice,
    totalItems: totalItems,
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