/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assets } from "../../../assets/assets";

const Post17 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        Official Announcement: Club World Cup
        </div>
        
        <div className="cnt-hm-img1">
          <img src={assets.RealLogoPhoto} alt="European Cups" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">OFFICIAL ANNOUNCEMENT.10/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
        Real Madrid C. F. would like to announce that at no time has there been any question regarding our participation in the new Club World Cup to be organised by FIFA in the coming 2024/2025 season. Our club will therefore take part, as planned, in this official competition and we are proud and excited to be involved in it and we will once again inspire our millions of fans all over the world with another trophy.
        </div>

       
      </div>
    </>
  );
};

export default Post17;
