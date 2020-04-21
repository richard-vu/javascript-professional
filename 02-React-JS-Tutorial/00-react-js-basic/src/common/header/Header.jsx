import React, { Component } from "react";
import logo from "../../assets/icon/logo.jpg";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <a className="navbar-brand" href="https://github.com/richard-vu/">
          <img src={logo} width="50" height="50" alt="" />
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
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/">
              Features
            </a>
            <a className="nav-item nav-link" href="/">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="/">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
