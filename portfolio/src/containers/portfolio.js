import React, { Component } from "react";
import PortfolioItem from "./presentational/portfolioItem";
import PortfolioDetails from "./presentational/portfolioDetails";
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

  handleClickShowDetails = e => {
    const selected = e.target.id;
    const portItem = this.state.portfolio.map(portItem => {
      return { ...portItem, chose: portItem.id === selected };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.id === selected;
    });
    this.setState({ portfolio: filterItem, active: true });
  };

  handleClickShowAll = e => {
    this.setState({ portfolio: [...dataJson], active: false });
  };

  handleClickSearchLayout = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.Layout === selected;
    });
    this.setState({ portfolio: filterItem, active: false });
  };

  handleClickSearchJavaScript = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.JavaScript === selected;
    });
    this.setState({ portfolio: filterItem, active: false });
  };

  handleClickSearchAPI = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.API === selected;
    });
    this.setState({ portfolio: filterItem, active: false });
  };

  handleClickSearchReact = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.React === selected;
    });
    this.setState({ portfolio: filterItem, active: false });
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
      <div className="portfolioSectionFix">
        <div className="portfolioSection" id="projects">
          <p className="portfolioTitle"> PORTFOLIO </p>
          <span className="portfolioUndeline" />
          <p
            className="portfolioAnim "
            style={this.props.scroll > 2100 ? scrollChange : scrollDefault}
          />
          <div className="usedTechnologies">
            <p
              className="usedTechnologiesButton"
              onClick={this.handleClickShowAll}
            >
              All projects
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.handleClickSearchLayout}
              id="Layout"
            >
              Projects based on designed layouts
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.handleClickSearchJavaScript}
              id="JavaScript"
            >
              Projects, where JavaScript was used
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.handleClickSearchAPI}
              id="API"
            >
              Projects, where API was used
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.handleClickSearchReact}
              id="React"
            >
              Projects written in React
            </p>
            <p className="textToGithub">
              For more projects, please visit my Github
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
              click={this.handleClickShowDetails}
            />
            <PortfolioDetails
              portfolio={this.state.portfolio}
              click={this.handleClickShowAll}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
