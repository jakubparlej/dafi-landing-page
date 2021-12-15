import React from "react";
import "./Capacity.scss";

function Capacity(props) {
  return (
    <div className="capacity">
      <div className="capacity__liters">{props.liters}</div>
      <p className="capacity__title">{props.title}</p>
    </div>
  );
}

export default Capacity;
