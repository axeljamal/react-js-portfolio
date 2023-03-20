import "./style.css";
import React from "react";
import about from "../../assets/images/about-me.png";
import cv from "../../assets/images/CV.pdf";

const Bio = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">
          <img src={about} className="img" alt="true" />
        </div>
      </div>

      <div className="right">
        <h1>Axel Jamal</h1>

        <p>
          I have been working in Hospitality Industry for several years with an
          outstanding performance. Now looking into my passion for technology
          and design where I acquired a certification for skills in Front-End
          Web Development demonstrated on various projects including HTML, CSS,
          JavaScript, Node.js and Github.
        </p>
        <div>
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
