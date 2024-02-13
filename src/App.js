import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import About from "./Components/Navbar/About";
import Home from "./Components/Navbar/Home";
import ContactUs from "./Components/ContactUs/ContactUs";

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
    },
     { path: "/",
      element: <Router/>
     },
     {
      path: "/contactus",
      element: <ContactUs/>
     }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
