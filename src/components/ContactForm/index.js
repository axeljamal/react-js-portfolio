import "./style.css";

import React from "react";
import { Link } from "react-router-dom";

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
        <div className="contactMe">
          <h2>Email</h2>
          <a className="email" href="mailto:axeltaj@gmail.com">
            axeltaj@gmail.com
          </a>
        </div>
        <div className="contactMe">
          <h2>Phone</h2>
          <a className="email" href="tel:07985447179">
            +44 798 544 7179
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
