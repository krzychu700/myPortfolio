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
                Back
              </p>
              <p className="projectName">{item.name}</p>
              <p className="projectDescription">{item.Description}</p>
              <p className="projectLive">
                Live version:
                <a
                  style={{ display: "table-cell", margin: "0 10px" }}
                  href={`${item.LiveVersion}`}
                  target="_blank"
                >
                  {` SEE HERE`}
                </a>
              </p>
              <p className="projectLive">
                Code:
                <a
                  style={{ display: "table-cell" }}
                  href={`${item.Github}`}
                  target="_blank"
                >
                  <i className="fab fa-github projectGithub" />
                </a>
              </p>
              <p className={item.GithubAPI ? "projectLive" : "projectHideInfo"}>
                Code with API:
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
                  src: `${item.img}`,
                  alt: `${item.img}`,
                  className: "imgPortfolioDetails"
                }}
                zoomImage={{
                  src: `${item.img}`,
                  alt: `${item.img}`
                }}
              />
            </div>
          ) : null;
        })
      : null}
  </div>
);
export default PortfolioDetails;