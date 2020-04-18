import React, { Component } from "react";
import Header from "../../common/header/Header";
import BaseComponent from "./base-component/BaseComponent";
import Card from "./card/Card";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <BaseComponent />
        <Card />
      </div>
    );
  }
}
