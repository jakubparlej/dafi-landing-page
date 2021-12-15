import React from "react";
import "./Feature.scss";

function Feature(props) {
  return (
    <div className="feature">
      <div className="feature__title">{props.title}</div>
      <div className="feature__desc">{props.desc}</div>
    </div>
  );
}

export default Feature;
