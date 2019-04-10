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
          <p className="skillsTitle">{this.props.text.SKILLS} </p>
          <span className="skillsUndeline" />
          <div
            className="skillsAnim"
            style={this.props.scroll > 660 ? scrollChange : scrollDefault}
          >
            <div className="skillDescriptionArea">
              <span>
                <i className="fab fa-leanpub skillIcon" />
              </span>
              <p className="skillTitle">{this.props.text.skill1} </p>
              <p className="skillDescription">{this.props.text.skillText1}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="far fa-comments skillIcon" />
              </span>
              <p className="skillTitle"> {this.props.text.skill2} </p>
              <p className="skillDescription">{this.props.text.skillText2}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-dumbbell skillIcon" />
              </span>
              <p className="skillTitle">{this.props.text.skill3} </p>
              <p className="skillDescription">{this.props.text.skillText3}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-lightbulb skillIcon" />
              </span>
              <p className="skillTitle">{this.props.text.skill4} </p>
              <p className="skillDescription">{this.props.text.skillText4}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-sitemap skillIcon" />
              </span>
              <p className="skillTitle"> {this.props.text.skill5} </p>
              <p className="skillDescription">{this.props.text.skillText5}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-search skillIcon" />
              </span>
              <p className="skillTitle"> {this.props.text.skill6} </p>
              <p className="skillDescription">{this.props.text.skillText6}</p>
            </div>
            <div className="skillDescriptionArea">
              <span>
                <i className="fas fa-award skillIcon" />
              </span>
              <p className="skillTitle">{this.props.text.skill7} </p>
              <p className="skillDescription">{this.props.text.skillText7}</p>
            </div>
          </div>
          <p className="skillsTitle"> {this.props.text.TechSkill} </p>
          <span className="skillsUndeline skillsUndeline--techSkills" />
          <TechSkills text={this.props.text} />
        </div>
      </div>
    );
  }
}

export default Skills;
