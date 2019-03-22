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
      <div className="portfolioSectionFix" id="portfolio">
        <div className="portfolioSection">
          <p className="portfolioTitle">PORTFOLIO</p>
          <span className="portfolioUndeline" />
          <p
            className="portfolioAnim"
            style={this.props.scroll > 150 ? scrollChange : scrollDefault}
          />
          <div className="portfolioExampleArea">
            <div className="portfolioExample" />
            <div className="portfolioExample" />
            <div className="portfolioExample" />
            <div className="portfolioExample" />
            <div className="portfolioExample" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
