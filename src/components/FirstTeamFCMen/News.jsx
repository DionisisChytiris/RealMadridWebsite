/* eslint-disable no-unused-vars */
import React from "react";
import "../PostNews/postStyle.css";
import HomeLrgImg from "../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../Templates/HomeSectionSmall/HomeSmallImg";
import HomeMedium2 from "../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../data/PostNews/Posts";
import FTNews from "../../../data/FirstTeam/FtNews";

const News = () => {
  const data1 = FTNews.filter((item) => item.type == "newsMen1");
  const data2 = FTNews.filter((item) => item.type == "newsMen2");
  const data3 = FTNews.filter((item) => item.type == "newsMen3");
  const data4 = FTNews.filter((item) => item.type == "newsMen4");
  // const data4 = Posts.filter((item) => item.type == "c");
  return (
    <div className="ft-fc-men-cnt">
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
      <div className="medium2Section" >
        {data4.map((item, index) => {
          return (
            <div key={index}>
              <HomeMedium2
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

export default News;
