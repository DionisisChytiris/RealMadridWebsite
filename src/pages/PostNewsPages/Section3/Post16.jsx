/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post11 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        All 15 European Cups are on display at the Tour Bernabéu
        </div>
        
        <div className="cnt-hm-img1">
          <img src={assets.EuropeanCups} alt="European Cups" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 07/06/2024Photographer: Pedro Castillo</div>
        <div className="cnt-hm-tx1-noraml-sm">
           
           You can now admire <span>La Decimoquinta</span> on the Tour Bernabéu The <span>Champions League</span> that Real Madrid won in London is on display at the <span>Santiago Bernabéu</span> museum and visitors who take the tour will have the opportunity to see the 15 European Cups and have their photographs taken with them. 
        </div>

       
      </div>
    </>
  );
};

export default Post11;
