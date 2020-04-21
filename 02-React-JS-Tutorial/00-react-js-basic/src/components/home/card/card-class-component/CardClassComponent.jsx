import React, { Component } from "react";
import "./CardClassComponent.css";

export default class CardClassComponent extends Component {
  notify = () => {
    alert("Welcome to Mương 14");
  };

  notify_2 = (x) => {
    alert("Welcome to Mương 14 " + x);
  };

  render() {
    return (
      <div className="col-md-4 col-sm-12">
        <div className="card text-center card-class-component">
          <img
            src={this.props.image}
            className="card-img-top card-img-component"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn btn-group">
              <a
                href={this.props.link}
                className="btn btn-info"
                onClick={this.notify}
              >
                No Variable
              </a>
              <a
                href={this.props.link}
                className="btn btn-warning"
                onClick={() => {
                  this.notify_2(this.props.title);
                }}
              >
                Variable
              </a>
              <a
                href={this.props.link}
                className="btn btn-danger"
                onClick={this.notify_2.bind(this, this.props.title)}
              >
                Binding
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
