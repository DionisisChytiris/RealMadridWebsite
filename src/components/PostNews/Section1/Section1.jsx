/* eslint-disable no-unused-vars */
import React from "react";
// import "./Section5.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";

const Section1 = () => {
  const data1 = Posts.filter((item) => item.type == "a");
  const data2 = Posts.filter((item) => item.type == "b");
  // const data3 = Posts.filter((item) => item.type == "b");

  return (
    <div>
      <div>
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
      </div>
      <div className="smallSection">
        {data2.map((item, index) => {
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
      <div className="smallSection">
        {data2.map((item, index) => {
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
    </div>
  );
};

export default Section1;
