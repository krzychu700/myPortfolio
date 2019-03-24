import React, { Component } from "react";
import PortfolioItem from "./presentational/portfolioItem";
import "./portfolio.scss";
import dataJson from "../Data.json";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      data: dataJson,
      portfolio: [],
      active: false
    };
  }

  componentDidMount() {
    this.setState({ portfolio: [...this.state.data] });
  }

  click = e => {
    const selected = e.target.id;
    const portItem = this.state.portfolio.map(portItem => {
      return { ...portItem, chose: portItem.id === selected };
    });
    const aa = portItem.filter(portItem => {
      return portItem.id === selected;
    });
    this.setState({ portfolio: aa, active: true });
  };

  click2 = e => {
    this.setState({ portfolio: [...dataJson], active: false });
  };

  click3 = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const aa = portItem.filter(portItem => {
      console.log(portItem.API, selected, portItem.API === selected);
      return portItem.API === selected;
    });

    this.setState({ portfolio: aa, active: false });
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
            className="portfolioAnim "
            style={this.props.scroll > 150 ? scrollChange : scrollDefault}
          />
          <div className="usedTechnologies">
            <p
              className="usedTechnologiesButton"
              onClick={this.click3}
              id="API"
            >
              API
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.click3}
              id="GIT"
            >
              GIT
            </p>
            <p className="usedTechnologiesButton" onClick={this.click2}>
              ALL
            </p>
          </div>
          <div
            className={
              this.state.active === false
                ? "portfolioExampleArea"
                : "portfolioExampleArea portfolioExampleArea--selected"
            }
          >
            <PortfolioItem
              portfolio={this.state.portfolio}
              click={this.click}
            />
            <div>
              {this.state.portfolio.length !== 0
                ? this.state.portfolio.map(item => {
                    return item.chose === true ? (
                      <div
                        className={
                          item.chose === true ? "portfolioDetailsArea" : null
                        }
                        onClick={this.click2}
                        key={item.id}
                      >
                        <p>{item.name}</p>
                      </div>
                    ) : null;
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
