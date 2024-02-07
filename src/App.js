import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ItemsList from "./Components/ItemsList/ItemsList";
import ContextProvider from "./Store/ContextProvider";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";

function App() {
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
}

export default App;
