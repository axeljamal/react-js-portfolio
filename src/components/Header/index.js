import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="site-header left-menu">
        <ul className="navbar-nav nv-left">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <Link className="navbar-brand" to="/">
        AXEL JAMAL
      </Link>

      <div className="site-header right-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Header;
