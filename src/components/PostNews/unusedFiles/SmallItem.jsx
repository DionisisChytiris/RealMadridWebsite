/* eslint-disable no-unused-vars */
import React from "react";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import "./postStyle.css";
import Posts from "../../../../data/PostNews/Posts";

const SmallItem = () => {
  const data = Posts.filter((item) => item.type == "b");

  return (
    <div className="smallSection">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <HomeSmallImg 
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

export default SmallItem;
