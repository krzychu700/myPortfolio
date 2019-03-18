import React, { Component } from "react";
import "./App.css";
import Menu from "../src/containers/menu";
import Header from "../src/containers/header";
import About from "../src/containers/about";
import Skills from "../src/containers/skills";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolPos: 0
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
        <Menu menuStyle={this.state.scrolPos} />
        <Header headStyle={this.state.scrolPos} />
        <About aboutStyle={this.state.scrolPos} />
        <Skills aboutStyle={this.state.scrolPos} />
      </div>
    );
  }
}

export default App;
