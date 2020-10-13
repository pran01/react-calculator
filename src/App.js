import React, { Component } from "react";
import "./App.css";

import Body from "./components/body";

class App extends Component {
  state = {
    buttons: [
      { id: 1, value: "C" },
      { id: 2, value: "AC" },
      { id: 3, value: 1 },
      { id: 4, value: 2 },
      { id: 5, value: 3 },
      { id: 6, value: 4 },
      { id: 7, value: 5 },
      { id: 8, value: 6 },
      { id: 9, value: 7 },
      { id: 10, value: 8 },
      { id: 11, value: 9 },
      { id: 12, value: 0 },
      { id: 13, value: "+" },
      { id: 14, value: "-" },
      { id: 15, value: "*" },
      { id: 16, value: "/" },
      { id: 17, value: "=" },
    ],
    display: {
      onScreen: "",
      input: "",
    },
  };
  handleClick = (value) => {
    if (value === "=") {
      let prev = this.state.display.input;
      // eslint-disable-next-line
      let result = eval(this.state.display.input);
      this.setState({
        display: {
          onScreen: prev,
          input: result,
        },
      });
    } else if (value === "AC") {
      this.setState({
        display: {
          onScreen: "",
          input: "",
        },
      });
    } else if (value === "C") {
      let input = this.state.display.input;
      if (input !== "") {
        input = input.slice(0, -1);
        this.setState({
          display: {
            input: input,
          },
        });
      }
    } else {
      let input = this.state.display.input + `${value}`;
      this.setState({
        display: {
          input: input,
        },
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Body
          onScreen={this.state.display.onScreen}
          input={this.state.display.input}
          buttons={this.state.buttons}
          doHandleClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

export default App;
