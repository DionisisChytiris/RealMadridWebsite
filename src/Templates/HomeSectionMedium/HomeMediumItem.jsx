/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeMediumItem.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const HomeMediumItem = () => {
  return (
    <div className="mainContainerM">
      <Link to="/tickets">
        <div className="containerMediumItem">
          <div className="imgBoxM">
            <img src={assets.img2} alt="" />
          </div>
          <div className="titleBoxM">
            <div className="titleM">{assets.title}</div>
          </div>
        </div>
      </Link>
      <Link to="/tickets">
        <div className="containerMediumItem">
          <div className="imgBoxM">
            <img src={assets.img2} alt="" />
          </div>
          <div className="titleBoxM">
            <div className="titleM">{assets.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeMediumItem;
