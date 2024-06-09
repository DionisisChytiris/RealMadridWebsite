/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeSmallImg.css";
import { Link } from "react-router-dom";
import Posts from "../../../data/PostNews/Posts";

const SmallImgItem = ({ link, img, alt, title }) => {
  return (
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
  );
};

const HomeSmallImg = () => {
  const data = Posts.filter((item) => item.type == "b");
  return (
    <div className="mainContainer">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <SmallImgItem
              link={item.link}
              img={item.img}
              alt={item.alt}
              title={item.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeSmallImg;
