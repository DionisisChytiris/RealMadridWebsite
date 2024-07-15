/* eslint-disable no-unused-vars */
import React from "react";
import "./Copyright.css";
import { LuDot } from "react-icons/lu";
import { assets } from "../../../assets/assets";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="text">
          <Link to='https://github.com/DionisisChytiris?tab=repositories' style={{display: 'flex',flexDirection: 'row', gap: 10, alignItems: 'center', backgroundColor: '#ccc',padding: '4px 8px', borderRadius: 20}}>
            <div>DionisisChytiris GitHub</div>
            <div><FaGithub style={{ color: "#0f2145", fontSize: "16px" }}/></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
