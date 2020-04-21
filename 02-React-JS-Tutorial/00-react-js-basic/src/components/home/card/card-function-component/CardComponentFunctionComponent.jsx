import React from "react";
import "./CardComponentFunctionComponent.css";

function notify() {
  alert("Welcome to Mương 14");
}

function notify_2(x) {
  alert("Welcome to Mương 14 " + x);
}

export default function CardComponentFunctionComponent(props) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card text-center card-class-component">
        <img
          src={props.image}
          className="card-img-top card-img-component"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="btn btn-group">
            <a
              href={props.link}
              className="btn btn-primary"
              onClick={() => {
                notify();
              }}
            >
              No Variable
            </a>
            <a
              href={props.link}
              className="btn btn-warning"
              onClick={() => {
                notify_2(props.title);
              }}
            >
              Variable
            </a>
            <a
              href={props.link}
              className="btn btn-danger"
              onClick={notify_2.bind(this, props.title)}
            >
              Binding
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
