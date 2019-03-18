import React, { Component } from "react";
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
          <p className="aboutTitle">About me</p>
          <p
            className="aboutAnim"
            style={this.props.aboutStyle > 150 ? scrollChange : scrollDefault}
          >
            I am graduate University of Warmia and Mazury in Olsztyn, currently
            working as Navigation Information Analyst in aviation company. I am
            open to propositions and always strive to acquire new knowledge and
            experience. I like to learn new things and always looking for new
            challenges, that’s why I decided, to take the first steps as Junior
            Front-end Developer. In February 2019 I finished 720h of the course
            realized by Kodilla. Currently I am working on my own projects,
            trying to improve my skills and practice knowledge, which I learned.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
