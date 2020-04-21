import React, { Component } from "react";
import "./Home.css";

import Header from "../../common/header/Header";
import BaseComponent from "./base-component/BaseComponent";
import Card from "./card/Card";
import Map from "./map/Map";
import Sign from "./sign/Sign";
import UserLists from "./user-lists/UserLists";
import Footer from "../../common/footer/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: 0,
      signStatus: 0,
      count: 0,
      userList: [
        {
          id: null,
          firstName: null,
          lastName: null,
          active: null,
        },
      ],
    };
  }

  checkSign = () => {
    if (this.state.showHide !== 0) {
      return <UserLists />;
    }
    return;
  };

  saveUser = () => {
    this.setState({ showHide: 1 });
  };

  saveUser_2 = () => {
    this.setState({ showHide: 0 });
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <Header className="header-align container-fluid" />
        </div>

        <BaseComponent />
        <Card />
        <div className="text-center home-align">
          <Map />
        </div>
        <div className="row border home-align">
          <Sign saveUser={this.saveUser} />
        </div>
        <div className="row text-center home-align">
          <div className="col-12">
            <div className="btn-group" role="group">
              <button className="btn btn-primary" onClick={this.saveUser}>
                {this.state.showHide === 0
                  ? "Show list users"
                  : "Hide list users"}
              </button>

              <button className="btn btn-primary" onClick={this.saveUser_2}>
                {this.state.showHide === 0
                  ? "Hide list users"
                  : "Show list users"}
              </button>
            </div>
          </div>
        </div>
        <div className="row">{this.checkSign()}</div>

        <Footer />
      </div>
    );
  }
}
