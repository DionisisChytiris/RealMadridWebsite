/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";
import './RealLogoTopSection.css'

const RealLogoTopSection = ({ text }) => {
  return (
    <div className="rl-lg-tp-sct">
      <div className="rl-lg-tp-sct-txt">{text}</div>
      <div style={logo} className="st-me-logo"></div>
    </div>
  );
};

export default RealLogoTopSection;

const logo = {
  backgroundImage: `url(${assets.real_logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "160px",
  height: "160px",
  position: "absolute",
  top: 20,
  right: 0,
  zIndex: 10,
};

