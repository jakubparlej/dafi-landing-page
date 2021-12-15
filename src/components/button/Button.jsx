import React from "react";
import "./Button.scss";

const styles = ["btn--primary", "btn--secondary"];

export const Button = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  return (
    <button onClick={onClick} type={type} className={`btn ${checkButtonStyle}`}>
      {children}
    </button>
  );
};
