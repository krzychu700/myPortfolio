import React, { Component } from "react";
import "./header.css";
import Canvas from "./presentational/canvas";

class Header extends Component {
  render() {
    return (
      <div className="headerSection">
        <p className="nameText">I'm Krzysztof Szypulski</p>
        <div className="canvasSection">
          <Canvas />
        </div>
        <div className="bcgPicture">
          <img src="/img/mountain2.png" alt="mountains" className="headerImg" />
        </div>
      </div>
    );
  }
}

export default Header;
