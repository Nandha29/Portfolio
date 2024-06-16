import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";

const RoutingList = () => {
  const pages = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/contacts",
      element: <ContactUs />,
    },
  ];

  return (
    <Routes>
      {pages.map((page) => (
        <Route key={page.path} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
};

export default RoutingList;
