import React, { Component } from "react";

export default class ButtonChange extends Component {
  constructor() {
    super();

    this.state = {
      name: "Hello Richard"
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({name: "Welcome to React JS"});
            console.log(this.state.name);
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
