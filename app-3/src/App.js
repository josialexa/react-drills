import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: ['ice cream', 'spaghetti', 'dog', 'nice', 'hot dog', 'cat', 'catherine'],
      filteredItems: ['ice cream', 'spaghetti', 'dog', 'nice', 'hot dog', 'cat', 'catherine'],
      text: ''
    }
  }

  handleChange(value) {
    let rgx = new RegExp(value, "i")
    let temp = [...this.state.items].filter(v => rgx.test(v))

    this.setState({filteredItems: temp,
                    text: value})
  }

  render() {
    const listItems = this.state.filteredItems.map(v => {
      return <h1 key={v}>{v}</h1>
    })
    return (
      <div className="App">
        <div>
          <input
            placeholder='Type here...'
            onChange={(e) => this.handleChange(e.target.value)}
            value={this.state.text}></input>
        </div>
        <div>{listItems}</div>
      </div>
    );
  }
}

export default App;
