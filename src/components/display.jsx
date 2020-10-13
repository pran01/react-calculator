import React, { Component } from "react";
class Display extends Component {
  state = {
    styles: {
      width: "200px",
      gridRowStart: 1,
      gridRowEnd: 3,
      gridColumnStart: 1,
      gridColumnEnd: 5,
      marginTop: 10,
      marginBottom: 5,
      height: 90,
      position: "relative",
      wordWrap: "break-word",
      background: "#5bd9c6",
      borderRadius: "5px",
    },
  };
  render() {
    return (
      <div className="grid-item" style={this.state.styles}>
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: 15,
            maxWidth: "195px",
          }}>
          {this.props.onScreen}
        </span>
        <text
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: 20,
            maxWidth: "195px",
          }}>
          {this.props.input}
        </text>
      </div>
    );
  }
}

export default Display;
