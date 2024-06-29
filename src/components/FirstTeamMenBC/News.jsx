/* eslint-disable no-unused-vars */
import React from 'react'
import "../PostNews/postStyle.css";
import HomeLrgImg from "../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../Templates/HomeSectionSmall/HomeSmallImg";
import HomeMedium2 from "../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../data/PostNews/Posts";

const News = () => {
  const data1 = Posts.filter((item) => item.type == "sct1");
  const data2 = Posts.filter((item) => item.type == "sct3");
  const data3 = Posts.filter((item) => item.type == "c");
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
    <div className="medium2Section" >
      {data3.map((item, index) => {
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
  )
}

export default News