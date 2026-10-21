import React from "react";
import Hero2 from "../components/Hero2";
import Card from "../components/Card";
import CaseStudy from "../components/CaseStudy";
import caseStudiesData from "../caseStudiesData.json";
import projectsData from "../projectsData.json";
import Wrapper from "../components/Wrapper";
import "../index.css";

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <Hero2 heading="PROJECTS" text="" />
        <h2 className="section-title">Case studies</h2>
        {caseStudiesData.map((project) => (
          <CaseStudy key={project.name} {...project} />
        ))}
        <h2 className="section-title">Earlier work</h2>
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
