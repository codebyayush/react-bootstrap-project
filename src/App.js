import React from "react";
import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Router from "./Components/Router/Router";
import About from "./Components/Navbar/About";
import Home from "./Components/Navbar/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import SingleItem from "./Components/SingleProduct/SingleItem";
import ContextProvider from "./Store/ContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    { path: "/", element: <Router /> },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
    {
      path: "/Store/:productId",
      element: <SingleItem />,
    },
  ]);

  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path={"/Store"} element={<Router />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/"} element={<Router />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/Store/:productId"} element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;