import React, { Component } from "react";
import "./menu.scss";

class Menu extends Component {
  render() {
    const scrollChange = {
      backgroundColor: "#0E0F11",
      borderBottom: "2px solid #fff",
      filter: "drop-shadow(0 0 8px #fff)"
    };
    const scrollDefault = {
      backgroundColor: "inherit"
    };

    return (
      <div
        style={this.props.menuStyle < 50 ? scrollDefault : scrollChange}
        className="menu"
        ref="menu"
      >
        <ul className="menuList">
          <li className="menuItem">
            <a className="menuLink" href="#home">
              Home
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#about">
              About
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#skills">
              Skills
            </a>
          </li>
          <li className="menuItem">Portfolio</li>
          <li className="menuItem">D</li>
          <li className="menuItem">E</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
