/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/trackRecordsIcons/assets";
import "./TrophyRecord.css";

const TrophyRecord = () => {
  return (
    <div className="tr-rc-cnt-main">
      {/* Top Buttons */}
      <div className="tr-rc-top">
        <div className="tr-btn1-bx">
          <div>Football</div>
          <div>Basketball</div>
        </div>
        <div className="tr-btn2-bx">
          <div>See all honors</div>
        </div>
      </div>

      {/* Body records */}
      <div className="bd-rc-cnt">
        <div className="bd-rc-left">
          {/* Best Club */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.bestClub} alt="" />
              <div className="bd-rc-lf-num">1</div>
            </div>
            <div className="bd-rc-title">
              The Best Club of the 20th Century FIFA Trophy
            </div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* European Cup */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.EuropeanCup} alt="" />
              <div className="bd-rc-lf-num">14</div>
            </div>
            <div className="bd-rc-title">European Cups</div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* FIFA Cup */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.FIFAClub} alt="" />
              <div className="bd-rc-lf-num">8</div>
            </div>
            <div className="bd-rc-title">FIFA Club World Cups</div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* European Super Cup */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.EuropeanSuperCup} alt="" />
              <div className="bd-rc-lf-num">5</div>
            </div>
            <div className="bd-rc-title">European Super Cup</div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* UEFA Cups*/}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.UEFACup} alt="" />
              <div className="bd-rc-lf-num">2</div>
            </div>
            <div className="bd-rc-title">UEFA Cups</div>
            <div className="bd-rc-progress"></div>
          </div>
        </div>
        <div className="bd-rc-right">
          {/* National Leagues */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.NationalLeague} alt="" />
              <div className="bd-rc-lf-num">36</div>
            </div>
            <div className="bd-rc-title">National Leagues</div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* Spanish Cups */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.SpanishCup} alt="" />
              <div className="bd-rc-lf-num">20</div>
            </div>
            <div className="bd-rc-title">Spanish Cups</div>
            <div className="bd-rc-progress"></div>
          </div>
          {/* Spanish Super Cups */}
          <div className="bd-rc-left-item">
            <div className="bd-rc-lf-tl">
              <img src={assets.SpanishSuperCup} alt="" />
              <div className="bd-rc-lf-num">13</div>
            </div>
            <div className="bd-rc-title">Spanish Super Cups</div>
            <div className="bd-rc-progress"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 200,
          height: 10,
          backgroundColor: "blue",
          marginTop: 8,
        }}
      ></div>
    </div>
  );
};

export default TrophyRecord;
