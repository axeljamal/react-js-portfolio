import "./style.css";

import React, { Component } from "react";

// import WebImg from "";

class Hero2 extends Component {
  render() {
    return (
      <div className="hero2">
        <div className="mask2"></div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Hero2;
