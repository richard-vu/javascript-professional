import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ButtonChange from "../button-change/ButtonChange";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
            <ButtonChange />
        </div>
      </div>
    );
  }
}
