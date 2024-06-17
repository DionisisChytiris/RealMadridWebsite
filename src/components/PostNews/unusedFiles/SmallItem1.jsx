/* eslint-disable no-unused-vars */
import React from "react";
import Posts from "../../../../data/PostNews/Posts";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import "../postStyle.css";

const SmallItem1 = () => {
  const data1 = Posts.filter((item) => item.type == "b");
  return (
    <div className="smallSection">
      {data1.map((item, index) => {
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

export default SmallItem1;
