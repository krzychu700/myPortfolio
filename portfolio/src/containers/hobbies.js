import React, { Component } from "react";
import CountUp from "react-countup";
import "./about.scss";

class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies">
        <div className="hobbie">
          <img
            className="hobbieLogo"
            src={process.env.PUBLIC_URL + "/img/WitcherLogo.png"}
            alt="wither logo"
          />
          <div className="numberSection">
            <div className="numberCounter">
              <CountUp start={0} end={400} delay={3} duration={5} />+
            </div>
            <div className="numberCounter">
              <CountUp start={0} end={8} delay={3} duration={5} />
            </div>
          </div>
          <div className="descriptionSectionHobbie">
            <p className="hobbieText">{this.props.text.hobby1} </p>
            <p className="hobbieText"> {this.props.text.hobby2} </p>
          </div>
        </div>
        <div className="hobbie">
          <img
            className="hobbieLogo"
            src={process.env.PUBLIC_URL + "/img/marvel.png"}
            alt="marvel logo"
          />
          <div className="numberSection">
            <div className="numberCounter">
              <CountUp start={0} end={21} delay={3} duration={5} />
            </div>
            <div className="numberCounter">
              <CountUp start={0} end={7} delay={3} duration={5} />
            </div>
          </div>
          <div className="descriptionSectionHobbie">
            <p className="hobbieText"> {this.props.text.hobby3} </p>
            <p className="hobbieText"> {this.props.text.hobby4} </p>
          </div>
        </div>
        <div className="hobbie">
          <img
            className="hobbieLogo"
            src={process.env.PUBLIC_URL + "/img/sword.png"}
            alt="marvel logo"
          />
          <div className="numberSection">
            <div className="numberCounter">
              <CountUp start={0} end={17} delay={3} duration={5} />
            </div>
            <div className="numberCounter">
              <CountUp start={0} end={10075} delay={3} duration={5} />
            </div>
          </div>
          <div className="descriptionSectionHobbie">
            <p className="hobbieText">{this.props.text.hobby5}</p>
            <p className="hobbieText">{this.props.text.hobby6} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
