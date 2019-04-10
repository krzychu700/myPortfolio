import React, { Component } from "react";
import "./App.scss";
import Menu from "../src/containers/menu";
import Header from "../src/containers/header";
import About from "../src/containers/about";
import Skills from "../src/containers/skills";
import Portfolio from "../src/containers/portfolio";
import Contact from "../src/containers/contact";
import Footer from "../src/containers/footer";
import En from "./en.json";
import Pl from "./pl.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolPos: 0,
      language: "en",
      text: En,
      portfolio: [...En.en],
      data: En.en
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.menuNavigationScroll.bind(this);
  }

  handleScroll() {
    const scrolPos = window.pageYOffset;
    // console.log(scrolPos);
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

  handleLanguage = () => {
    if (this.state.language === "en") {
      this.setState({
        language: "pl",
        text: Pl,
        portfolio: [...Pl.pl],
        data: Pl.pl
      });
    }
    if (this.state.language === "pl") {
      this.setState({
        language: "en",
        text: En,
        portfolio: [...En.en],
        data: En.en
      });
    }
  };

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

  handleClickShowDetails = e => {
    const selected = e.target.id;
    const portItem = this.state.portfolio.map(portItem => {
      return { ...portItem, chose: portItem.id === selected };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem.id === selected;
    });
    this.setState({ portfolio: filterItem, active: true });
  };

  handleClickShowAll = e => {
    this.setState({ portfolio: [...this.state.data], active: false });
  };

  handleClickSearch = e => {
    const selected = e.target.id;
    const portItem = this.state.data.map(portItem => {
      return { ...portItem };
    });
    const filterItem = portItem.filter(portItem => {
      return portItem[selected] === selected;
    });
    this.setState({ portfolio: filterItem, active: false });
  };

  render() {
    return (
      <div className="App">
        <Menu
          scroll={this.state.scrolPos}
          langSwitcher={this.handleLanguage}
          text={this.state.text}
          language={this.state.language}
        />
        <Header
          scroll={this.state.scrolPos}
          text={this.state.text}
          language={this.state.language}
        />
        <About scroll={this.state.scrolPos} text={this.state.text} />
        <Skills scroll={this.state.scrolPos} text={this.state.text} />
        <Portfolio
          scroll={this.state.scrolPos}
          text={this.state.text}
          language={this.state.language}
          portfolio={this.state.portfolio}
          handleClickShowDetails={this.handleClickShowDetails}
          handleClickShowAll={this.handleClickShowAll}
          handleClickSearch={this.handleClickSearch}
        />
        <Contact text={this.state.text} />
        <Footer />
      </div>
    );
  }
}

export default App;
