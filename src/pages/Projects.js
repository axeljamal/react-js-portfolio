import React from "react";
import Hero2 from "../components/Hero2";
import Card from "../components/Card";
import projectsData from "../projectsData.json";
import Wrapper from "../components/Wrapper";

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <Hero2 heading="PROJECTS" text="" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginTop: "10vh",
            padding: "10px",
          }}
        >
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
