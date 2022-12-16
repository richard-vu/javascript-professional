import React, { Component } from "react";
import './Sign.css'
export default class Sign extends Component {
  render() {
    return (
      <form className="sign-align">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Username
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
