import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import homeBg from "../assets/images/Hero.JPG";
function Home() {
  return (
    <div>
      <Hero>
        <img
          className="object-cover object-center bg-none rounded-full shadow-xl transition-colors-shadow duration-700 hover:shadow-indigo-500/70 hover:opacity-60"
          alt="hero"
          src={homeBg}
        />
        <h1>Axel Jamal</h1>
        <h2>Front-End Developer + Artist</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12"></Col>
        </Row>
        <Row>
          <Col size="md-12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
