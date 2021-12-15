import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "./Link.scss";

export const Link = ({ children, href }) => {
  return (
    <a className="link" href={href}>
      {children}
      <BsChevronRight />
    </a>
  );
};
