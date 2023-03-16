import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const NavPanel = () => {
  // event listener to take user to page they clicked on
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // navbar color when scroll down
  const [color, setColor] = useState(false);
  const [textColor, setTextColor] = useState(false);
  const changeColor = () => {
    // if window is less than of equal to 100 pixels then set navbar background color
    if (window.scrollY >= 100) {
      setColor(true);
      setTextColor(true);
    } else {
      setColor(false);
      setTextColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "panel-header panel-header-bg" : "panel-header"}>
      <ul
        className={click ? "panel-menu active" : "panel-menu "}
        onClick={handleClick}
      >
        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/axeljamal.github.io/react-js-portfolio/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/Projects"
          >
            Projects
          </Link>
        </li>

        <Link to="/">
          <h1
            className={
              textColor ? "content logo content-light" : "content logo"
            }
          >
            Portfolio
          </h1>
        </Link>

        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/About"
          >
            About Me
          </Link>
        </li>

        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#ggg" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#ggg" }} />
        )}
      </div>
    </div>
  );
};

export default NavPanel;
