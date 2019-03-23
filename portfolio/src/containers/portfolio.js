import React, { Component } from "react";
import "./portfolio.scss";
import dataJson from "../Data.json";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson,
      data: dataJson,
      portfolio: []
    };
  }
  click = e => {
    const selected = e.target.id;
    const portfolio2 = [...this.state.data];
    // console.log(portfolio2);
    const selectedPortfolio = portfolio2.find(port => port.id === selected);
    // selectedPortfolio.chose = true;
    this.setState({ portfolio: { ...selectedPortfolio, tak: "tak" } });
  };

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
          <p className="portfolioTitle"> PORTFOLIO </p>
          <span className="portfolioUndeline" />
          <p
            className="portfolioAnim"
            style={this.props.scroll > 150 ? scrollChange : scrollDefault}
          />
          <div className="portfolioExampleArea">
            <div className="examplesContainer">
              <div
                onClick={this.click}
                className={
                  this.state.portfolio.tak === "tak" ? "as" : "portfolioExample"
                }
                id="1"
              />
              <div onClick={this.click} className="portfolioExample" id="2" />
              <div onClick={this.click} className="portfolioExample" id="3" />
              <div onClick={this.click} className="portfolioExample" id="4" />
              <div onClick={this.click} className="portfolioExample" id="5" />
            </div>
            <div className="portfolioDetailsArea" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
