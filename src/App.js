import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
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
        </div>
      </Router>
    </>
  );
}

export default App;
