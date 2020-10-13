import React, { Component } from "react";
class Button extends Component {
  state = {};
  handleButtonClick = () => {};
  getClassName() {
    let classes = "btn text-center badge-pill grid-item m-1 btn-";
    if (typeof this.props.value == "number") classes += "secondary";
    else if (typeof this.props.value == "string") {
      if (this.props.value === "C" || this.props.value === "AC")
        classes += "warning";
      else classes += "info";
    }
    return classes;
  }
  render() {
    return (
      <button
        onClick={() => this.props.doHandleClick(this.props.value)}
        className={this.getClassName()}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
