import React, { Component } from "react";
import Image from './components/Image'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
          imageSrc="https://i.pinimg.com/originals/fd/55/26/fd5526f556f445a4f54afe2e2ce7fe26.jpg"
          altText="A super cute sloth!" />
      </div>
    );
  }
}

export default App;
