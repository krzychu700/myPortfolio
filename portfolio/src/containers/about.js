import React, { Component } from "react";
import Hobbies from "./hobbies";
import "./about.scss";

class About extends Component {
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
          <p className="aboutTitle">{this.props.text.ABOUT}</p>
          <span className="aboutUndeline" />
          <p
            className="aboutAnim"
            style={this.props.scroll > 150 ? scrollChange : scrollDefault}
          >
            {this.props.text.About_text1}
          </p>
          <div
            className="hobbiesSection"
            style={this.props.scroll > 390 ? scrollChange : scrollDefault}
          >
            <p>{this.props.text.About_text2}</p>
            {this.props.scroll > 380 ? (
              <Hobbies text={this.props.text} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
