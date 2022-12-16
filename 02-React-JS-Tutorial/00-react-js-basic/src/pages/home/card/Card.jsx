import React, { Component } from "react";
import CardComponentFunctionComponent from "../../../components/home/card/card-function-component/CardComponentFunctionComponent";
import CardClassComponent from "../../../components/home/card/card-class-component/CardClassComponent";
import "./Card.css";
import img_1 from "../../../assets/post-images/img_1.png";
import img_2 from "../../../assets/post-images/img_2.jpg";
import img_3 from "../../../assets/post-images/img_3.jpg";
import img_4 from "../../../assets/post-images/img_4.jpg";
import img_5 from "../../../assets/post-images/img_5.jpg";
import img_6 from "../../../assets/post-images/img_6.jpg";

export default class Card extends Component {
  render() {
    return (
      <div className="container-fuild card-top">
        <div className="row">
          <CardComponentFunctionComponent
            image={img_1}
            link="https://kenh14.vn/hot-girl-bap-can-bo-thanh-tam-khoc-rong-khi-xem-reaction-cua-hoi-hater-tiet-lo-nhung-dieu-gay-ton-thuong-tam-ly-nang-ne-20200418115537136.chn"
            title='Girl "Đảm Đang" 1'
          />
          <CardClassComponent
            image={img_2}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title='Girl "Đảm Đang" 2'
          />
          <CardClassComponent
            image={img_3}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-lo-anh-voi-nhan-sac-khac-la-dan-mang-doan-chac-la-do-thieu-app-chinh-anh-day-ma-20200326072042455.chn"
            title='Girl "Đảm Đang" 3'
          />
        </div>
        <div className="row card-top">
          <CardComponentFunctionComponent
            image={img_4}
            link="https://kenh14.vn/hot-girl-bap-can-bo-thanh-tam-khoc-rong-khi-xem-reaction-cua-hoi-hater-tiet-lo-nhung-dieu-gay-ton-thuong-tam-ly-nang-ne-20200418115537136.chn"
            title='Girl "Đảm Đang" 4'
          />
          <CardClassComponent
            image={img_5}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title='Girl "Đảm Đang" 5'
          />
          <CardClassComponent
            image={img_6}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-lo-anh-voi-nhan-sac-khac-la-dan-mang-doan-chac-la-do-thieu-app-chinh-anh-day-ma-20200326072042455.chn"
            title='Girl "Đảm Đang" 6'
          />
        </div>
      </div>
    );
  }
}
