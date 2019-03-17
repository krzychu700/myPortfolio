import React, { Component } from "react";
import "./App.css";
import Menu from "../src/containers/menu";
import Header from "../src/containers/header";
import About from "../src/containers/about";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll(event) {
    const aaa = window.pageYOffset;
    console.log(aaa);
    if (aaa > 100) {
      this.setState({
        scrolPos: aaa
      });
    } else if (aaa < 100) {
      this.setState({
        scrolPos: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Menu menuStyle={this.state.scrolPos} />
        <Header headStyle={this.state.scrolPos} />
        <About aboutStyle={this.state.scrolPos} />
      </div>
    );
  }
}

export default App;
