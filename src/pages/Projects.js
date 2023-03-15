import React from "react";
import Hero2 from "../components/Hero2";
import Card from "../components/Card";
import projectsData from "../projectsData.json";
import Wrapper from "../components/Wrapper";
import "../index.css";

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <Hero2 heading="PROJECTS" text="" />
        <div className="workContainer">
          {projectsData.map((project) => (
            <Card
              key={project.name}
              name={project.name}
              image={project.image}
              details={project.details}
              pageLink={project.pageLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
