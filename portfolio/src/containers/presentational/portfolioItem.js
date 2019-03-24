import React from "react";

const PortfolioItem = props => (
  <div className="examplesContainer">
    {props.portfolio.map(item => {
      return (
        <div
          onClick={props.click}
          className={
            item.chose === true
              ? "portfolioExample portfolioExample--selected"
              : "portfolioExample"
          }
          id={item.id}
        />
      );
    })}
  </div>
);
export default PortfolioItem;
