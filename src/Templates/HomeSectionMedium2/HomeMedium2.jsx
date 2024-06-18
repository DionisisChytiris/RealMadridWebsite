/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeMedium2.css";
import { Link } from "react-router-dom";

const HomeMedium2 = ({ link, img, alt, title }) => {
  return (
    <div className="mainContainerM2">
      <Link to={link}>
        <div className="containerMediumItem2">
          <div className="imgBoxM2">
            <img src={img} alt={alt} />
          </div>
          <div className="titleBoxM2">
            <div className="titleM2">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeMedium2;
