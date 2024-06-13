/* eslint-disable no-unused-vars */
import React from "react";
// import "./Section5.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";

const Section4 = () => {
  const data = Posts.filter((item) => item.type == "sct5a");
  const data1 = Posts.filter((item) => item.type == "sct5b");

  return (
    <div>
      <div>A legendary track record</div>
      <div>New official Real Madrid 24/25 Home Kit</div>
      {data.map((item, index) => {
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
  );
};

export default Section4;
