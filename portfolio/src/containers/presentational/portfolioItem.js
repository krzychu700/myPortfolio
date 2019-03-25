import React from "react";

const PortfolioItem = props => (
  <div className="examplesContainer">
    {props.portfolio.map(item => {
      return (
        <div
          key={item.id}
          onClick={props.click}
          className={
            item.chose === true
              ? "portfolioExample portfolioExample--selected"
              : "portfolioExample "
          }
          style={{
            backgroundImage: `url("${item.img}")`
          }}
          id={item.id}
        />
      );
    })}
  </div>
);
export default PortfolioItem;
