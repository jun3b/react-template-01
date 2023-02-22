import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Vision from "./components/Vision";
import "./css/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Vision />
    </>
  );
}
