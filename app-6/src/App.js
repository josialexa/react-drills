import React, { Component } from "react";
import Todo from './Components/Todo'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      todos: []
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick() {
    let {input, todos} = this.state

    todos.push(input)

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          onChange={e => this.handleChange(e)}></input>
        <button
          onClick={() => this.handleClick()}>Add item</button>
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
