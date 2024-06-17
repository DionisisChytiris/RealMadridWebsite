/* eslint-disable no-unused-vars */
import React from "react";
import Posts from "../../../../../data/PostNews/Posts";
import HomeLrgImg from '../../../../Templates/HomeSectionLarge/HomeLargeImg'

const LargeItem1 = () => {
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
    </>
  );
};

export default LargeItem1;
