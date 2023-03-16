import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { Routes } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Hero>
          <h1>Axel Jamal</h1>
          <h2>Front-End Developer + Artist</h2>
        </Hero>
      </Routes>
    </div>
  );
};

export default About;
