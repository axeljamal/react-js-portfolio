import "./style.css";

import React from "react";
import { useState } from "react";

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "9ae252b3-fd83-4227-a036-b56eced60f81",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) throw new Error(data.message);
        setError(false);
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })

      .catch(() => setError(true));
  };

  return (
    <div className="contactContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <div className="submit-btn">
            <button className="button-56">Submit</button>
          </div>
        </form>

        {success && <p className="success">Form Submitted Successfully!</p>}
        {error && (
          <p className="error">
            Something went wrong. Please email me at axeltaj@gmail.com instead.
          </p>
        )}
      </div>

      <div className="contactEnd">
        <div className="contactMe">
          <h2>Email:</h2>
          <a className="email" href="mailto:axeltaj@gmail.com" target="blank">
            axeltaj@gmail.com
          </a>
        </div>
        <div className="contactMe">
          <h2>Phone:</h2>
          <a className="email" href="tel:07985447179">
            +44 798 544 7179
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
