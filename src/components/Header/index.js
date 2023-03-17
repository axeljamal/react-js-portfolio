import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/avatar.png";

const Header = () => {
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
    <div
      className={color ? "panel-header panel-header-bg" : "panel-header"}
      onClick={handleClick}
    >
      <ul className={click ? "panel-menu active" : "panel-menu"}>
        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/Projects"
          >
            PROJECTS
          </Link>
        </li>

        <div className="logo-container">
          <img className="logo" src={logo} alt="avatar" />
        </div>
        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/About"
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            className={textColor ? "content content-light" : "content"}
            to="/Contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#ggg" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ggg" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
