import React, { Component } from "react";
import PortfolioItem from "./presentational/portfolioItem";
import PortfolioDetails from "./presentational/portfolioDetails";
import "./portfolio.scss";
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

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
          <p className="portfolioTitle"> {this.props.text.PORTFOLIO} </p>
          <span className="portfolioUndeline" />
          <p
            className="portfolioAnim "
            style={this.props.scroll > 2100 ? scrollChange : scrollDefault}
          />
          <div className="usedTechnologies">
            <p
              className="usedTechnologiesButton"
              onClick={this.props.handleClickShowAll}
            >
              {this.props.text.button1}
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.props.handleClickSearch}
              id="Layout"
            >
              {this.props.text.button2}
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.props.handleClickSearch}
              id="JavaScript"
            >
              {this.props.text.button3}
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.props.handleClickSearch}
              id="API"
            >
              {this.props.text.button4}
            </p>
            <p
              className="usedTechnologiesButton"
              onClick={this.props.handleClickSearch}
              id="React"
            >
              {this.props.text.button5}
            </p>
            <p className="textToGithub">
              {this.props.text.GitLink}
              <a
                style={{ display: "table-cell" }}
                href="https://github.com/krzychu700"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
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
              portfolio={this.props.portfolio}
              click={this.props.handleClickShowDetails}
            />
            <PortfolioDetails
              portfolio={this.props.portfolio}
              click={this.props.handleClickShowAll}
              text={this.props.text}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
