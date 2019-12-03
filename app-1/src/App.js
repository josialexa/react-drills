import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(value) {
    this.setState({text: value})
  }

  render() {
    return (
      <div className="App">
        <div>
          <input
            placeholder='Type here...'
            onChange={(e) => {this.handleChange(e.target.value)}}></input>
        </div>
        <div>
          <span>{this.state.text}</span>
        </div>
      </div>
    );
  }
}

export default App;
