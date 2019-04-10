import React from "react";
import ImageZoom from "react-medium-image-zoom";

const PortfolioDetails = props => (
  <div>
    {props.portfolio.length !== 0
      ? props.portfolio.map(item => {
          return item.chose === true ? (
            <div
              className={item.chose === true ? "portfolioDetailsArea" : null}
              key={item.id}
            >
              <p className="usedTechnologiesButton" onClick={props.click}>
                {props.text.button6}
              </p>
              <p className="projectName">{item.name}</p>
              <p className="projectDescription">{item.Description}</p>
              <p className="projectLive">
                {props.text.PortText1}
                <a
                  style={{ display: "table-cell", margin: "0 10px" }}
                  href={`${item.LiveVersion}`}
                  target="_blank"
                >
                  {props.text.PortText2}
                </a>
              </p>
              <p className="projectLive">
                {props.text.PortText3}
                <a
                  style={{ display: "table-cell" }}
                  href={`${item.Github}`}
                  target="_blank"
                >
                  <i className="fab fa-github projectGithub" />
                </a>
              </p>
              <p className={item.GithubAPI ? "projectLive" : "projectHideInfo"}>
                {props.text.PortText4}
                <a
                  style={{ display: "table-cell" }}
                  href={`${item.GithubAPI}`}
                  target="_blank"
                >
                  <i className="fab fa-github projectGithub" />
                </a>
              </p>
              <p className="projectTechnologies">{item.Technologies}</p>
              <ImageZoom
                image={{
                  src: `${process.env.PUBLIC_URL + item.img}`,
                  alt: `${process.env.PUBLIC_URL + item.img}`,
                  className: "imgPortfolioDetails"
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL + item.img}`,
                  alt: `${process.env.PUBLIC_URL + item.img}`
                }}
              />
            </div>
          ) : null;
        })
      : null}
  </div>
);
export default PortfolioDetails;
