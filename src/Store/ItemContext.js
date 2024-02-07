import React from "react";

const ItemContext = React.createContext({
  itemArr: [],
  cartArr: [],
  quantity: 1,
  totalItems: 0,
  totalPrice: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (item) => {}
});

export default ItemContext;
 