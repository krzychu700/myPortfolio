import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  render() {
    const scrollChange = {
      backgroundColor: "#0E0F11"
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
          <li className="menuItem">A</li>
          <li className="menuItem">B</li>
          <li className="menuItem">C</li>
          <li className="menuItem">D</li>
          <li className="menuItem">E</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
