import React from "react";

const PortfolioDetails = props => (
  <div>
    {props.portfolio.length !== 0
      ? props.portfolio.map(item => {
          return item.chose === true ? (
            <div
              className={item.chose === true ? "portfolioDetailsArea" : null}
              onClick={props.click}
              key={item.id}
            >
              <p>{item.name}</p>
            </div>
          ) : null;
        })
      : null}
  </div>
);
export default PortfolioDetails;
