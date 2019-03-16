import React, { Component } from 'react';
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
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
