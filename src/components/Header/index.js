import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav className="navbar navbar-expand text-center">
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
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              PROJECTS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="site-header brand">
        <Link className="navbar-brand" to="/">
          AXEL JAMAL
        </Link>
      </div>

      <div className="site-header right-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
