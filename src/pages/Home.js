import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="">
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
