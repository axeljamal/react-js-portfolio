import "./style.css";

import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../Wrapper";

function Card(props) {
  return (
    <Wrapper>
      <div className="project-card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <h2 className="project-title"> {props.name} </h2>
        <div className="pro-details">
          <p> {props.details} </p>
          <div className="pro-btns">
            <NavLink to={props.pageLink} className="button-56">
              View
            </NavLink>
            <NavLink to={props.sourceLink} className="button-56">
              Source
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Card;
