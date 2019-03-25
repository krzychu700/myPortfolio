import React, { Component } from "react";
import "./App.scss";
import Menu from "../src/containers/menu";
import Header from "../src/containers/header";
import About from "../src/containers/about";
import Skills from "../src/containers/skills";
import Portfolio from "../src/containers/portfolio";

import dataJson from "./Data.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolPos: 0,
      data: dataJson
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.menuNavigationScroll.bind(this);
  }

  handleScroll() {
    const scrolPos = window.pageYOffset;
    console.log(scrolPos);
    if (scrolPos > 100) {
      this.setState({
        scrolPos
      });
    } else if (scrolPos < 100) {
      this.setState({
        scrolPos: 0
      });
    }
  }

  menuNavigationScroll() {
    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "nearest",
              behavior: "smooth"
            });
          });
        }
      }
    })();
  }

  render() {
    return (
      <div className="App">
        <Menu scroll={this.state.scrolPos} />
        <Header scroll={this.state.scrolPos} />
        <About scroll={this.state.scrolPos} />
        <Skills scroll={this.state.scrolPos} />
        <Portfolio dataJson={this.state.data} scroll={this.state.scrolPos} />
      </div>
    );
  }
}

export default App;
