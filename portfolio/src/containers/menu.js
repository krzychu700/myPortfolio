import React, { Component } from "react";
import Switcher from "./hook/switcher";
import "./menu.scss";

class Menu extends Component {
  constructor() {
    super();
  }

  render(props) {
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
        style={this.props.scroll < 50 ? scrollDefault : scrollChange}
        className="menu"
        ref="menu"
      >
        {/* <Switcher /> */}
        <ul className="menuList">
          <li className="menuItem">
            <a className="menuLink" href="#home">
              {this.props.text.home}
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
          <li className="menuItem">
            <a className="menuLink" href="#projects">
              Portfolio
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#contact">
              Contact
            </a>
          </li>
          <li className="menuItem" onClick={this.props.langSwitcher}>
            {this.props.language === "en" ? "PL" : "EN"}
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
