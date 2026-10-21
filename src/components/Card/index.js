import "./style.css";

import React from "react";
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
            <a href={props.pageLink} target="_blank" rel="noopener noreferrer" className="button-56">
              View
            </a>
            <a href={props.sourceLink} target="_blank" rel="noopener noreferrer" className="button-56">
              Source
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Card;
