/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeLargeImg.css";
import { Link } from "react-router-dom";

const HomeLrgImg = ({ link1, img, alt, title }) => {
  return (
    <div style={{ width: "80%", margin: "0px auto 50px" }}>
      <Link to={link1}>
        <div className="container">
          <div className="part1">
            <img src={img} alt={alt} />
          </div>
          <div className="part2">
            <div className="title">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeLrgImg;
