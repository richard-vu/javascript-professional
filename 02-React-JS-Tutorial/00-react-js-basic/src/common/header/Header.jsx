import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://github.com/richard-vu/"
        >
          Richard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active"
              href="https://github.com/richard-vu/"
            >
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link"
              href="https://github.com/richard-vu/"
            >
              Features
            </a>
            <a
              className="nav-item nav-link"
              href="https://github.com/richard-vu/"
            >
              Pricing
            </a>
            <a
              className="nav-item nav-link disabled"
              href="https://github.com/richard-vu/"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
