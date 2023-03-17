import React from "react";
import Hero from "../components/Hero";
import about from "./../assets/images/about-me.png";

function About() {
  return (
    <div>
      <Hero>
        <img src={about} className="img-fluid" alt="..."></img>
        <h1>Axel Jamal</h1>
        <h2>Front-End Developer + Artist</h2>
      </Hero>
    </div>
  );
}

export default About;
