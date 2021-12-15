import React from "react";
import "./Pros.scss";
import checkIcon from "../../assets/check-icon.svg";

function Pros(props) {
  return (
    <div className="pros">
      <img src={checkIcon} alt="Check Icon" />
      <p>{props.text}</p>
    </div>
  );
}

export default Pros;
