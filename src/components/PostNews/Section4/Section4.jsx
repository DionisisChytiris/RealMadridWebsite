/* eslint-disable no-unused-vars */
import React from "react";
import "./Section4.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import { assets } from "../../../assets/assets";

const Section4 = () => {
  const data1 = Posts.filter((item) => item.type == "section4a");
  const data2 = Posts.filter((item) => item.type == "sct4a");
  const data3 = Posts.filter((item) => item.type == "sct4b");

  return (
    <div>
      <div className="smallSection sct4">
        {data1.map((item, index) => {
          return (
            <div key={index}>
              <HomeSmallImg
                link={item.link}
                video={item.video}
                img={item.img}
                alt={item.alt}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
      <div className="test-sct4-box">
        <div className="sct4-title top">A legendary track record</div>
        <div className="middle-section">
          <img src={assets.TrophiesCollection} />
          <div className="honours-table">hello</div>
        </div>
      </div>
      <div className="sct4-title">New official Real Madrid 24/25 Home Kit</div>
      {data2.map((item, index) => {
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
        {data3.map((item, index) => {
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

export default Section4;
