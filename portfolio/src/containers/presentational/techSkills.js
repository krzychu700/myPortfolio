import React, { Component } from "react";
import Coverflow from "react-coverflow";
import "./techSkills.scss";

class TechSkills extends Component {
  render() {
    return (
      <div className="techSkillArea">
        <div>
          <Coverflow
            width={1000}
            height={400}
            displayQuantityOfSide={2}
            navigation={true}
            enableHeading={false}
            infiniteScroll={true}
          >
            <div className="techSkill">
              <i className="fab fa-html5 techSkillIcon" />
              <p className="techSkillName">HTML5</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-css3-alt techSkillIcon" />
              <p className="techSkillName">CSS3</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-sass techSkillIcon" />
              <p className="techSkillName">Sass</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-js-square techSkillIcon" />
              <p className="techSkillName">JavaScript</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-npm techSkillIcon" />
              <p className="techSkillName">NPM</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-react techSkillIcon" />
              <p className="techSkillName">React</p>
            </div>

            <div className="techSkill">
              <i className="fab fa-node techSkillIcon" />
              <p className="techSkillName">Node.js</p>
            </div>

            <div className="techSkill">
              <img
                className="svgBootstrap"
                src={process.env.PUBLIC_URL + "/img/Bootstrap.svg"}
                alt="bootstrap icon"
              />
              <p className="techSkillName">Bootstrap</p>
            </div>

            <div className="techSkill">
              <img
                className="svgMongo"
                src={process.env.PUBLIC_URL + "/img/Mongodb.svg"}
                alt="Mongodb icon"
              />
              <p className="techSkillName">MongoDB</p>
            </div>

            <div className="techSkill">
              <img
                className="svgRedux"
                src={process.env.PUBLIC_URL + "/img/Redux.svg"}
                alt="Redux icon"
              />
              <p className="techSkillName">Redux</p>
            </div>

            <div className="techSkill">
              <img
                className="svgJQuery"
                src={process.env.PUBLIC_URL + "/img/Jquery.svg"}
                alt="Jquery icon"
              />
              <p className="techSkillName">jQuery</p>
            </div>

            <div className="techSkill">
              <img
                className="svgWebpack"
                src={process.env.PUBLIC_URL + "/img/Webpack.svg"}
                alt="Webpack icon"
              />
              <p className="techSkillName">Webpack</p>
            </div>

            <div className="techSkill">
              <img
                className="svgGit"
                src={process.env.PUBLIC_URL + "/img/Git.svg"}
                alt="Git icon"
              />
              <p className="techSkillName">Git</p>
            </div>
          </Coverflow>
        </div>
      </div>
    );
  }
}

export default TechSkills;
