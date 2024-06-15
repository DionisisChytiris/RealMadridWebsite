/* eslint-disable no-unused-vars */
import React from "react";
import "./Copyright.css";
import { LuDot } from "react-icons/lu";
import { assets } from "../../../assets/assets";

const Copyright = () => {
  return (
    <div>
      <div className="copyright">
        <div className="text">Copyright this is the </div>
        <div className="policies">
          <a className="a">SEE ALL SPONSORS</a>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <p>Legal notice</p>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <p>Privacy Policy</p>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <p>Cookies Policy</p>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <p>Canal de informacion</p>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <p>realmadrid.com</p>
        </div>
      </div>
      <div className="copyright-sm-scr">
        <div>
          <img src={assets.real_logo} alt="logo" />
        </div>
        <div>
          <a href='/tickets'>SEE ALL SPONSORS</a>
        </div>
        <div className="sm-sc-policies">
          <a>Legal notice</a>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <a>Privacy Policy</a>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <a>Cookies Policy</a>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <a>Canal de informacion</a>
          <LuDot style={{ color: "#0f2145", fontSize: "12px" }} />
          <a>realmadrid.com</a>
        </div>
        <div className="text">Copyright this is the </div>
      </div>
    </div>
  );
};

export default Copyright;
