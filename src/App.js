import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
