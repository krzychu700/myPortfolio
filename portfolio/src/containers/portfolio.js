import React, { Component } from "react";
import "./portfolio.scss";

class Portfolio extends Component {
  render() {
    const scrollChange = {
      visibility: "visible"
    };
    const scrollDefault = {
      visibility: "hidden",
      animation: "fadeout 5s"
    };

    return (
      <div className="aboutSectionFix" id="about">
        <div className="aboutSection">
          <p className="aboutTitle">PORTFOLIO</p>
          <span className="aboutUndeline" />
          <p
            className="aboutAnim"
            style={this.props.scroll > 150 ? scrollChange : scrollDefault}
          >
            I am
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
