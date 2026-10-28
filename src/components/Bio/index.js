import "./style.css";
import React from "react";
import about from "../../assets/images/about-me.png";
import cv from "../../assets/images/CV.pdf";

const Bio = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">
          <img src={about} className="img" alt="Axel Jamal" />
        </div>
      </div>

      <div className="right">
        <h1>Axel Jamal</h1>

        <p>
          I'm a design engineer and AI creative technologist based in
          Brighton. I design in Figma and build in React, Vue and JavaScript,
          and I use Claude Code to go from idea to working product fast, guided
          by specs, tests and design standards such as Apple's Human Interface
          Guidelines and WCAG 2.2 AA.
        </p>
        <p>
          Before tech, I spent six years in hospitality, marketing and PR,
          leading teams and looking after guests. It taught me to design for
          the whole customer journey, not just the screen.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/axeljamal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Bio;
