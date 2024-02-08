import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import About from "./Components/Navbar/About";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
