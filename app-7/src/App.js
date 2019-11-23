import React, { Component } from "react";
import NewTask from './Components/NewTask'
import List from './Components/List'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  handleAddTodo(todo) {
    let {todos} = this.state

    todos.push(todo)

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h4>My Todo-List</h4>
        <NewTask new={this.handleAddTodo.bind(this)} />
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
