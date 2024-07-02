/* eslint-disable no-unused-vars */
import React from "react";
import "./NextEvents.css";
import { assets } from "../../assets/clubslogo/assets";
import { LuDot } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

const EventItem = () => {
  return (
    <div>
      <div className="next-evnt-card-bx">
        <div className="next-evnt-top">
          <div className="next-first-club">
            <img src={assets.realmadrid} alt="" />
            <div className="nx-clb-tx">Real Madrid</div>
          </div>
          <div className="next-symbol">
            <img src={assets.symbol} alt="" />
          </div>
          <div className="next-first-club">
            <img src={assets.milan} alt="" />
            <div className="nx-clb-tx">Milan</div>
          </div>
        </div>
        <div className="next-evnt-bottom">
          <div className="next-evnt-top-line">
            <p>Football</p>
            <LuDot style={{ color: "#0f2145", fontSize: "10px" }} />
            <p>First Team</p>
            <LuDot style={{ color: "#0f2145", fontSize: "10px" }} />
            <p>Male</p>
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              paddingRight: 10,
              color: "#1d1d57",
            }}
          >
            DirecTV Soccer Champions Tour
          </div>
          <div className="next-evnt-btm-line">
            <LuCalendarDays style={{ color: "#5b5e64", fontSize: "16px" }} />
            <div className="next-evnt-btm-line-tx">
              Thurday, Aug 1, 2:30 AM h
            </div>
          </div>
          <div className="next-evnt-btm-line">
            <CiLocationOn style={{ color: "#5b5e64", fontSize: "16px" }} />
            <div className="next-evnt-btm-line-tx">Soldier Field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
