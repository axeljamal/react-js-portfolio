import React from "react";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Wrapper from "../components/Wrapper";
import Hero2 from "../components/Hero2";

function About() {
  return (
    <div>
      <Wrapper>
        <Hero2 heading="ABOUT ME" text="" />
        <Bio />
        <Skills />
      </Wrapper>
    </div>
  );
}

export default About;
