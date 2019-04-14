import React, { Component } from "react";
import "./header.scss";
import Canvas from "./presentational/canvas";
import TextEN from "./textEN";
import TextPL from "./textPL";

class Header extends Component {
  render(props) {
    const scrollChange = {
      opacity: `${0 + this.props.scroll / 698}`,
      filter: `grayscale(${(2 * this.props.scroll) / 698})`
    };
    const scrollDefault = {
      opacity: `0`,
      filter: "grayscale(0)"
    };
    return (
      <div className="headerSectionFix" id="home">
        <div className="headerSection">
          <div
            style={this.props.scroll < 50 ? scrollDefault : scrollChange}
            className="scrollArea"
          />
          <div className="nightSkyPic">
            <div className="nightSky" />
            <div className="cloud" />
            <div className="cloud2" />
            <div className="cloud3" />
          </div>
          {this.props.language === "en" ? <TextEN /> : <TextPL />}

          <div className="canvasSection">
            {this.props.mode === false ? (
              this.props.scroll < 880 ? (
                <Canvas />
              ) : null
            ) : null}
          </div>
          <div className="bcgPicture">
            <img
              src={process.env.PUBLIC_URL + "/img/mountain2.png"}
              alt="mountains"
              className="headerImg"
            />
          </div>
          <i className="fas fa-arrow-circle-down arrowAnim" />
        </div>
      </div>
    );
  }
}

export default Header;
