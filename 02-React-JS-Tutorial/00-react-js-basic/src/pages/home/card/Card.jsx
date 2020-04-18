import React, { Component } from "react";
import CardComponentFunctionComponent from "../../../components/home/card/card-function-component/CardComponentFunctionComponent";
import CardClassComponent from "../../../components/home/card/card-class-component/CardClassComponent";
import "./Card.css";
import img_1 from "../../../assets/post-images/img_1.png";
import img_2 from "../../../assets/post-images/img_2.jpg";
import img_3 from "../../../assets/post-images/img_3.jpg";

export default class Card extends Component {
  render() {
    return (
      <div className="container-fuild card-top">
        <div className="row">
          <CardComponentFunctionComponent
            image={img_1}
            link="https://kenh14.vn/hot-girl-bap-can-bo-thanh-tam-khoc-rong-khi-xem-reaction-cua-hoi-hater-tiet-lo-nhung-dieu-gay-ton-thuong-tam-ly-nang-ne-20200418115537136.chn"
            title="Girl Dam Dang"
          />
          <CardClassComponent
            image={img_2}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title="Girl Dam Dang 2"
          />
          <CardClassComponent
            image={img_3}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title="Girl Dam Dang 3"
          />
        </div>
      </div>
    );
  }
}
