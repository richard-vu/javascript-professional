import React, { Component } from "react";
import ComponentFunctionDefault from "../../../components/home/base-componet/component-function-default/ComponentFunctionDefault";
import ComponentClass from "../../../components/home/base-componet/component-class/ComponentClass"
import ComponentArrowFunction from "../../../components/home/base-componet/component-arrow-function/ComponentArrowFunction"
import ComponentAnonymousFunction from '../../../components/home/base-componet/component-anonymous-function/ComponentAnonymousFunction'
import "./BaseComponent.css"

export default class BaseComponent extends Component {
  render() {
    return (
      <div className="container-fluid base-top">
        <div className="row text-center">
          <ComponentFunctionDefault />
          <ComponentClass />
          <ComponentArrowFunction />
          <ComponentAnonymousFunction />
        </div>
      </div>
    );
  }
}
