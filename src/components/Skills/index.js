import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  faWandMagicSparkles,
  faCube,
  faDatabase,
  faUniversalAccess,
  faVialCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faSquareJs,
  faNodeJs,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "Claude Code", icon: faWandMagicSparkles },
  { name: "Figma", icon: faFigma },
  { name: "React", icon: faReact },
  { name: "Vue", icon: faVuejs },
  { name: "JavaScript", icon: faSquareJs },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS and Tailwind", icon: faCss3 },
  { name: "Three.js", icon: faCube },
  { name: "Node.js", icon: faNodeJs },
  { name: "Supabase", icon: faDatabase },
  { name: "Accessibility", icon: faUniversalAccess },
  { name: "Testing", icon: faVialCircleCheck },
  { name: "GitHub", icon: faGithub },
];

const Skills = () => {
  return (
    <div className="bottom">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <FontAwesomeIcon className="icons" icon={skill.icon} />
            <div>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="project-btn-container">
        <Link
          to="/projects"
          className="btn"
          onClick={() => window.scrollTo(0, 0)}
        >
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default Skills;
