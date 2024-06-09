/* eslint-disable no-unused-vars */
import React from "react";
import HomeLrgImg from "../../Templates/HomeSectionLarge/HomeLargeImg";
import { assets } from "../../assets/assets";
import "./postStyle.css";
import HomeSmallImg from "../../Templates/HomeSectionSmall/HomeSmallImg";
import Posts from "../../../data/PostNews/Posts";
import { Link } from "react-router-dom";

const FirstPost = () => {
  const data1 = Posts.filter((item) => item.type == "a");

  return (
    <>
      {data1.map((item, index) => {
        return (
          <div key={index}>
            <HomeLrgImg
              link1={item.link}
              img={item.img}
              alt={item.alt}
              title={item.title}
            />
          </div>
        );
      })}

      <div className="smallSection">
        <HomeSmallImg />
      </div>
    </>
  );
};

export default FirstPost;
