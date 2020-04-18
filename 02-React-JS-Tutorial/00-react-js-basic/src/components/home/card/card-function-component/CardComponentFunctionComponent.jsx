import React from "react";
import "./CardComponentFunctionComponent.css";

export default function CardComponentFunctionComponent(props) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card text-center card-class-component">
        <img src={props.image} className="card-img-top card-img-component" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.link} className="btn btn-primary">
            Read Me
          </a>
        </div>
      </div>
    </div>
  );
}
