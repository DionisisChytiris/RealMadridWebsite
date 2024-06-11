/* eslint-disable no-unused-vars */
import React from "react";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";

const Section6 = () => {
  const data1 = Posts.filter((item) => item.type == "sct6a");
  const data2 = Posts.filter((item) => item.type == "b");
  return (
    <div>
      <div>
        <div className="section6-title sct6">
          Memorabilia Santiago Bernabéu Stadium
        </div>
        <div className="medium2Section">
          {data1.map((item, index) => {
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
      <div>
        <div className="section6-title-box">
          <div className="section6-title">Special features</div>
          <div>See all news -</div>
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
    </div>
  );
};

export default Section6;
