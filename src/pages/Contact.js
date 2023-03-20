import React from "react";
import ContactForm from "../components/ContactForm";
import Wrapper from "../components/Wrapper";
import Hero2 from "../components/Hero2";

const Contact = () => {
  return (
    <Wrapper>
      <Hero2 heading="GET IN TOUCH" text="" />
      <div>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default Contact;
