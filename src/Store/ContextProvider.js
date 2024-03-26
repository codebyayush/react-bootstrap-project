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

  const itemArr = [
    {
      id: 0,
      title: "Colors",
      price: 100,
      desc: "it's a multi-color smoke",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://source.unsplash.com/3k9PGKWt7ik",
        "https://source.unsplash.com/o0R4iqk1eRQ"
      ],
      quantity: 1,
      reviews: [
        { name: "Alice", rating: 5, comment: "Absolutely love these colors! The variety is fantastic." },
        { name: "Bob", rating: 4, comment: "Great quality, but took a while to arrive." }
      ]
    },
    {
      id: 1,
      title: "Black and white Colors",
      price: 50,
      desc: "It's a black & white color smoke",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://source.unsplash.com/3k9PGKWt7ik",
        "https://source.unsplash.com/o0R4iqk1eRQ"
      ],
      quantity: 1,
      reviews: [
        { name: "Charlie", rating: 3, comment: "Expected more contrast, but it's decent for the price." },
        { name: "Dana", rating: 5, comment: "Just what I needed for my photo project! Love it!" }
      ]
    },
    {
      id: 2,
      title: "Yellow and Black Colors",
      desc: "These are lights inside of a dark room presents black & yellow color",
      price: 70,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://source.unsplash.com/3k9PGKWt7ik",
        "https://source.unsplash.com/o0R4iqk1eRQ"
      ],
      quantity: 1,
      reviews: [
        { name: "Evan", rating: 4, comment: "Really cool effect, but needs the right background to pop." },
        { name: "Fiona", rating: 5, comment: "Stunning visual effect, made my project stand out!" }
      ]
    },
    {
      id: 3,
      title: "Blue Color",
      desc: "This is a Powder Blue Color image",
      price: 100,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        "https://source.unsplash.com/3k9PGKWt7ik",
        "https://source.unsplash.com/o0R4iqk1eRQ"
      ],
      quantity: 1,
      reviews: [
        { name: "George", rating: 2, comment: "Color was not as vibrant as expected." },
        { name: "Hannah", rating: 4, comment: "Good quality, but color varies slightly from the picture." }
      ]
    },
    // Add similar review structure for the rest of the items
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        "https://source.unsplash.com/3k9PGKWt7ik",
        "https://source.unsplash.com/o0R4iqk1eRQ"
      ],
      quantity: 1,
      reviews: [
        { name: "Ian", rating: 5, comment: "Perfect for my backdrop, absolutely love it!" },
        { name: "Jenny", rating: 3, comment: "Took a long time to arrive, but the color is nice." }
      ]
    },
    // Continue adding reviews for other items in the array...
  ];

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
    acc += Number(curr.quantity) * Number(curr.price);
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
