import "./style.css";

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ContactForm() {
  return (
    <div className="contactContainer">
      <div className="formContainer">
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <div className="submit-btn">
            <Link to="" className="button-56">
              Submit
            </Link>
          </div>
        </form>
      </div>
      <div className="contactRight">
        <div className="contactEmail">
          <h2>Email</h2>
          <a className="email" href="mailto:axeltaj@gmail.com">
            axeltaj@gmail.com
          </a>
        </div>
        <div className="contactEmail">
          <h2>Phone</h2>
          <a className="email" href="tel:07985447179">
            +44 798 544 7179
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/axel-trysna-anggara-jamal-3b74a464"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/axeljamal"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faGithub} />
          </a>
          <a
            href="https://instagram.com/axelanggara?igshid=YmMyMTA2M2Y="
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
