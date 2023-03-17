import React from "react";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Wrapper from "../components/Wrapper";

function About() {
  return (
    <div>
      <Wrapper>
        <Bio />
        <Skills />
      </Wrapper>
    </div>
  );
}

export default About;
