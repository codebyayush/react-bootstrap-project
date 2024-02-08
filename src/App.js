import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import About from "./Components/Navbar/About";
import Home from "./Components/Navbar/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Store",
      element: <Router />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Home",
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
