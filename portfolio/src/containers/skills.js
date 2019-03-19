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
        <p className="skillsTitle">SKILLS</p>
        <span className="skillsUndeline" />
        <div
          className="skillsAnim"
          style={this.props.aboutStyle > 560 ? scrollChange : scrollDefault}
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
              Good communication is the key to success, not matter, whether in a
              team or with clients. Throughout my career I have worked with
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
              My role requires strong organisational skills. I had to be able to
              work on many tasks at once, focus on most important items and
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
              Working with various clients has taught me to deliver products on
              time and in line with their expectations. In this way, I gained
              trust and clients knew that they could count on me.
            </p>
          </div>
        </div>
        <p className="skillsTitle">TECHNICAL SKILLS</p>
        <span className="skillsUndeline skillsUndeline--techSkills" />
        <div className="techSkillArea">
          <div className="techSkill">
            <i className="fab fa-html5" />
            <p className="techSkillName">HTML5</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-css3-alt" />
            <p className="techSkillName">CSS3</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-sass" />
            <p className="techSkillName">Sass</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-js-square" />
            <p className="techSkillName">JavaScript</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-npm" />
            <p className="techSkillName">NPM</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-react" />
            <p className="techSkillName">React</p>
          </div>

          <div className="techSkill">
            <i className="fab fa-node" />
            <p className="techSkillName">Node.js</p>
          </div>

          <div className="techSkill">
            <img
              className="svgBootstrap"
              src="/img/Bootstrap.svg"
              alt="bootstrap icon"
            />
            <p className="techSkillName">Bootstrap</p>
          </div>

          <div className="techSkill">
            <img
              className="svgMongo"
              src="/img/Mongodb.svg"
              alt="Mongodb icon"
            />
            <p className="techSkillName">MongoDB</p>
          </div>

          <div className="techSkill">
            <img className="svgRedux" src="/img/Redux.svg" alt="Redux icon" />
            <p className="techSkillName">Redux</p>
          </div>

          <div className="techSkill">
            <img
              className="svgJQuery"
              src="/img/Jquery.svg"
              alt="Jquery icon"
            />
            <p className="techSkillName">jQuery</p>
          </div>

          <div className="techSkill">
            <img
              className="svgWebpack"
              src="/img/Webpack.svg"
              alt="Webpack icon"
            />
            <p className="techSkillName">Webpack</p>
          </div>

          <div className="techSkill">
            <img className="svgGit" src="/img/Git.svg" alt="Git icon" />
            <p className="techSkillName">Git</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
