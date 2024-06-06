/* eslint-disable no-unused-vars */
import React from "react";
import HomeLrgImg from "../../Templates/HomeSectionLarge/HomeLargeImg";
import { assets } from "../../assets/assets";
import "./FirstPost.css";
import HomeSmallImg from "../../Templates/HomeSectionSmall/HomeSmallImg";

const FirstPost = () => {
  return (
    <div className="section">
      <div>
        <HomeLrgImg
          img={assets.president}
          title="La Decimoquinta is now at Real Madrid Sport City"
        />
      </div>
      <div>
        <HomeSmallImg />
      </div>
    </div>
  );
};

export default FirstPost;
