import React from "react";
import About from "./components/About";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Vision from "./components/Vision";
import "./css/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Vision />
      <Company />
      <Project />
      <Contact />
    </>
  );
}
