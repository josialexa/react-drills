import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleClick() {
    let {username, password} = this.state

    alert(`Username: ${username}  Password: ${password}`)
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={e => this.handleChangeUser(e)}
          value={this.state.user}></input>
        <input
          onChange={e => this.handleChangePassword(e)}
          value={this.state.password}></input>
        <button
          onClick={() => this.handleClick()}>Login</button>
      </div>
    );
  }
}

export default App;
