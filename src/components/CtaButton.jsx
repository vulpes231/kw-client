import React from "react";
import { Link } from "react-router-dom";

const CtaButton = ({ title, path }) => {
  return <Link to={path}>{title}</Link>;
};

export default CtaButton;
