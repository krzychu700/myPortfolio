import React, { Component } from "react";
import PortfolioItem from "./presentational/portfolioItem";
import "./portfolio.scss";
import dataJson from "../Data.json";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      data: dataJson,
      portfolio: []
    };
  }

  componentDidMount() {
    this.setState({ portfolio: [...this.state.data] });
  }

  click = e => {
    const selected = e.target.id;

    // const portfolio2 = [...this.state.portfolio];
    // const selectedPortfolio = this.state.portfolio.filter(
    //   port => port.id === selected
    // );
    // selectedPortfolio[0].chose = true;
    // console.log(selectedPortfolio);
    // console.log(dataJson);
    // this.setState({
    //   // portfolio: [...selectedPortfolio]
    //   portfolio: [(selectedPortfolio[0].chose = true)]
    // });
    const players = this.state.portfolio.map(player => {
      return { ...player, chose: player.id === selected };
    });
    this.setState({ portfolio: players });
  };

  click2 = e => {
    this.setState({ portfolio: [...dataJson] });
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
            <PortfolioItem
              portfolio={this.state.portfolio}
              click={this.click}
            />
            <div className="portfolioDetailsArea" onClick={this.click2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
