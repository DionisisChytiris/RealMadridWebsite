/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post15 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        Official Announcement: Mbappé
        </div>
        
        <div className="cnt-hm-img1">
          <img src={assets.RealLogoPhoto} alt="European Cups" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">OFFICIAL ANNOUNCEMENT.03/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
        Real Madrid C.F. and Kylian Mbappé have reached an agreement under which he will become a Real Madrid player for the next five seasons.
        </div>

       
      </div>
    </>
  );
};

export default Post15;
