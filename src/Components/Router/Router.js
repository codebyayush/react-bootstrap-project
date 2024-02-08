import React, { useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import NavigationBar from "../Navbar/Navbar";
import ContextProvider from "../../Store/ContextProvider";
import Cart from "../Cart/Cart";

const Router = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (bool) => {
    if (bool === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <ContextProvider>
      <NavigationBar handleToggle={toggleHandler} />
      <ItemsList />
      {toggle && <Cart handleToggle={toggleHandler} />}
    </ContextProvider>
  );
};

export default Router;
