import React, { Component } from 'react';
import './App.css';
import Menu from "../src/containers/menu";
import Header from "../src/containers/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
      </div>
    );
  }
}

export default App;
