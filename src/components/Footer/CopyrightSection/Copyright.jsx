/* eslint-disable no-unused-vars */
import React from "react";
import "./Copyright.css";
import { LuDot } from "react-icons/lu";

const Copyright = () => {
  return (
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
  );
};

export default Copyright;
