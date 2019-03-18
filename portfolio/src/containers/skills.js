import React, { Component } from "react";
import "./skills.scss";

class Skills extends Component {
  render() {
    const scrollChange = {
      visibility: "visible"
    };
    const scrollDefault = {
      visibility: "hidden",
      animation: "fadeout 5s"
    };

    return (
      <div className="skillsSection" id="skills">
        <p className="skillsTitle">About me</p>
        <p
          className="skillsAnim"
          style={this.props.aboutStyle > 480 ? scrollChange : scrollDefault}
        >
          I am graduate University of Warmia and Mazury in Olsztyn, currently
          working as Navigation Information Analyst in aviation company. I am
          open to propositions and always strive to acquire new knowledge and
          experience. I like to learn new things and always looking for new
          challenges, that’s why I decided, to take the first steps as Junior
          Front-end Developer. In February 2019 I finished 720h of the course
          realized by Kodilla. Currently I am working on my own projects, trying
          to improve my skills and practice knowledge, which I learned.
        </p>
      </div>
    );
  }
}

export default Skills;
