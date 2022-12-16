import React, { Component } from "react";
import "./Map.css";

const array = [1, 2, 3, "X", "Y", "Z"];
const result = array.map((x) => " " + x);

export default class Map extends Component {
  render() {
    return <h1 className="map-top">Map: {result}</h1>;
  }
}
