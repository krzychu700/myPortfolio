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
        <Switcher
          mode={this.props.mode}
          handleModeChange={this.props.handleModeChange}
        />
        <ul className="menuList">
          <li className="menuItem">
            <a className="menuLink" href="#home">
              {this.props.text.home}
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#about">
              {this.props.text.About}
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#skills">
              {this.props.text.Skills}
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#projects">
              {this.props.text.Portfolio}
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#contact">
              {this.props.text.Contact}
            </a>
          </li>
          <li className="menuItem" onClick={this.props.langSwitcher}>
            {this.props.language === "pl" ? (
              <img
                src={process.env.PUBLIC_URL + "/img/gb.svg"}
                className="flagIcon"
                alt="en icon"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/img/pl.svg"}
                className="flagIcon"
                alt="pl icon"
              />
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
