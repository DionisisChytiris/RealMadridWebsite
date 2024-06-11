/* eslint-disable no-unused-vars */
import React from "react";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";

const Section2 = () => {
  const data = Posts.filter((item) => item.type == "c");
  return (
    <div className="medium2Section">
      {data.map((item, index) => {
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
  );
};

export default Section2;
