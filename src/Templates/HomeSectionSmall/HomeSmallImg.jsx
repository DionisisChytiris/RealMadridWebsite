/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./HomeSmallImg.css";
import { Link } from "react-router-dom";

const HomeSmallImg = ({ link, img, alt, title }) => {

  return (
    <div className="mainContainer">
      <Link to={link}>
        <div className="containerSmlImg">
          <div className="imgBox">
            <img src={img} alt={alt} />
          </div>
          <div className="titleBox">
            <div className="title">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeSmallImg;
