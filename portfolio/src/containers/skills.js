import React, { Component } from "react";
import TechSkills from "./presentational/techSkills";
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
      <div className="skillsSectionFix">
        <div className="skillsSection" id="skills">
          <p className="skillsTitle">SKILLS</p>
          <span className="skillsUndeline" />
          <div
            className="skillsAnim"
            style={this.props.scroll > 660 ? scrollChange : scrollDefault}
          >
            <div className="skillDescriptionArea">
              <span>
                <i className="fab fa-leanpub skillIcon" />
              </span>
              <p className="skillTitle">Desire to learn</p>
              <p className="skillDescription">
                I always had a thirst for getting to know of computer software,
                how it works and I have a hunger to always keep on improving and
                learning new things
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="far fa-comments skillIcon" />
              </span>
              <p className="skillTitle">Communication</p>
              <p className="skillDescription">
                Good communication is the key to success, not matter, whether in
                a team or with clients. Throughout my career I have worked with
                various people from various teams.
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-dumbbell skillIcon" />
              </span>
              <p className="skillTitle">Motivated</p>
              <p className="skillDescription">
                I am an ambitious, hardworking individual and I don't give up
                until I finish my task.
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-lightbulb skillIcon" />
              </span>
              <p className="skillTitle">Problem solving</p>
              <p className="skillDescription">
                Throughout my work many times I had to face with different
                problems. Even now, when coding became my passion, this is a
                normal situation. Thanks to that, I'm learning more and solving
                problems makes more fun.
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-sitemap skillIcon" />
              </span>
              <p className="skillTitle">Well organized </p>
              <p className="skillDescription">
                My role requires strong organisational skills. I had to be able
                to work on many tasks at once, focus on most important items and
                coordinate other tasks.
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-search skillIcon" />
              </span>
              <p className="skillTitle">Attention to details</p>
              <p className="skillDescription">
                I am a perfectionist and I pay much attention to details. It is
                important for me to provide a 100% completed and good looking
                product.
              </p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-award skillIcon" />
              </span>
              <p className="skillTitle">Professionalism</p>
              <p className="skillDescription">
                Working with various clients has taught me to deliver products
                on time and in line with their expectations. In this way, I
                gained trust and clients knew that they could count on me.
              </p>
            </div>
          </div>
          <p className="skillsTitle">TECHNICAL SKILLS</p>
          <span className="skillsUndeline skillsUndeline--techSkills" />
          <TechSkills />
        </div>
      </div>
    );
  }
}

export default Skills;
