import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import MainImg from "../../assets/images/Hero.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img main-img" src={MainImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Axel Jamal</p>
        <h1>Front-End Developer + Artist</h1>
        <div>
          <Link
            to="/projects"
            className="btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Projects
          </Link>

          <a
            href="https://github.com/axeljamal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
