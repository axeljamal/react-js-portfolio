import React from "react";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Wrapper from "../components/Wrapper";

function About() {
  return (
    <Wrapper>
      <div>
        <Bio />
        <Skills />
      </div>
    </Wrapper>
  );
}

export default About;
