import React from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ItemsList from "./Components/ItemsList/ItemsList";
import ContextProvider from './Store/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <NavigationBar/>
      <ItemsList/>
    </ContextProvider>
  );
}

export default App;
