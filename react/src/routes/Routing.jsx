import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Nav from "../components/Nav";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import About from "../pages/About";
import Models from "../pages/Models";
import Visualization from "../components/Visualization";

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/contact", element: <Contact /> },
    { path: "/models", element: <Models /> },
    { path: "/visualization", element: <Visualization /> },
  ]);
  return (
    <div>
      <Nav />
      {routes}
    </div>
  );
};

export default Routing;
