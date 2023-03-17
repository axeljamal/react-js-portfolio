import "./style.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="mailto:axeltaj@gmail.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon className="icons" icon={faEnvelope} />
        </a>

        <a
          href="https://www.linkedin.com/in/axel-trysna-anggara-jamal-3b74a464"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </a>
        <a href="https://github.com/axeljamal" rel="noreferrer" target="_blank">
          <FontAwesomeIcon className="icons" icon={faGithub} />
        </a>
        <a
          href="https://instagram.com/axelanggara?igshid=YmMyMTA2M2Y="
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icons" icon={faInstagram} />
        </a>

        <a href="tel:07985447179" rel="noreferrer" target="_blank">
          <FontAwesomeIcon className="icons" icon={faMobilePhone} />
        </a>
      </div>
      <span>Created by Axel Jamal 2023</span>
    </footer>
  );
}

export default Footer;
