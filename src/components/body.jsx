import React, { Component } from "react";
import Display from "./display";
import Button from "./button";

class Body extends Component {
  state = {
    styles: {
      borderRadius: "20px",
      width: 240,
      display: "grid",
      gridRowStart: "2",
      gridTemplateColumns: "repeat(4, 50px)",
      gridTemplateRows: "repeat(7, 50px)",
      marginTop: "10%",
      height: "370px",
      boxShadow: "0px 0px 50px 5px black",
      background: "#ffffff",
      padding: "20px",
    },
  };

  render() {
    return (
      <div className="container calculator-body" style={this.state.styles}>
        <Display onScreen={this.props.onScreen} input={this.props.input} />
        {this.props.buttons.map((button) => (
          <Button
            key={button.id}
            value={button.value}
            doHandleClick={this.props.doHandleClick}
          />
        ))}
      </div>
    );
  }
}

export default Body;
