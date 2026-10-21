import "./style.css";

import React from "react";

// local images live in public/, remote ones are full URLs
const imageSrc = (image) =>
  image.startsWith("http") ? image : `${process.env.PUBLIC_URL}/${image}`;

function CaseStudy(props) {
  return (
    <article className="case-study">
      {props.image && (
        <div className="case-img">
          <img alt={`Screenshot of ${props.name}`} src={imageSrc(props.image)} />
        </div>
      )}
      <div className="case-body">
        <h2 className="case-title">{props.name}</h2>
        <p className="case-role">{props.role}</p>
        <ul className="case-stack">
          {props.stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <dl>
          <dt>Problem</dt>
          <dd>{props.problem}</dd>
          <dt>Approach</dt>
          <dd>{props.approach}</dd>
          <dt>Result</dt>
          <dd>{props.result}</dd>
        </dl>
        <div className="pro-btns">
          {props.pageLink && (
            <a href={props.pageLink} target="_blank" rel="noopener noreferrer" className="button-56">
              View
            </a>
          )}
          {props.sourceLink && (
            <a href={props.sourceLink} target="_blank" rel="noopener noreferrer" className="button-56">
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default CaseStudy;
