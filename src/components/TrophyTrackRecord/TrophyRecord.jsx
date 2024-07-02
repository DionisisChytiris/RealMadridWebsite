/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { assetsHm } from "../../assets/HomePageImages/assetsHm";
import "./TrophyRecord.css";
import "../PostNews/Section4/Section4.css";
import "../PostNews/postStyle.css";
import FootballRecords from "./FootballRecords";
import BasketballRecords from "./BasketballRecords";
import { Link } from "react-router-dom";

const TrophyRecord = () => {
  const [showImg, setShowImg] = useState("football");
  return (
    <div className="middle-section">
      {showImg == "football" && <img src={assets.TrophiesCollection} />}
      {showImg == "basketball" && <img src={assetsHm.NinethAvv} />}
      <div className="honours-table">
        <div className="tr-rc-cnt-main">
          {/* Top Buttons */}
          <div className="tr-rc-top">
            <div className="tr-btn1-bx">
              <div
                onClick={() => {
                  setShowImg("football");
                }}
                className={showImg == "football" ? "tr-btn-ftb" : "tr-btn-bsk"}
              >
                Football
              </div>
              {/* <div onClick={()=>{setShowImg('football')}} className="tr-btn-ftb">Football</div> */}
              <div
                onClick={() => {
                  setShowImg("basketball");
                }}
                className={showImg == "football" ? "tr-btn-bsk" : "tr-btn-ftb"}
              >
                Basketball
              </div>
            </div>
              <div className="tr-btn2-bx">
            <Link to='/tour'>
                <div>See all honors</div>
            </Link>
              </div>
          </div>
          {/* Body records */}
          {showImg == "football" && <FootballRecords />}
          {showImg == "basketball" && <BasketballRecords />}
        </div>
      </div>
    </div>
  );
};

export default TrophyRecord;
