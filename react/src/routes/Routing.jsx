import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Nav from "../components/Nav";
import SingIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import About from "../pages/About";
import Models from "../pages/Models";

const Routing = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SingIn />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/models" element={<Models />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
