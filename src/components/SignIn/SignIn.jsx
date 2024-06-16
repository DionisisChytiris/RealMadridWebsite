/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from "react-dom";
import "./SignIn.css";
import { assets } from "../../assets/assets";
import { LuTextCursorInput } from "react-icons/lu";

const SignIn = () => {
  return ReactDom.createPortal(
    <div className="sign-in">
      <div className="nav-sign-in">
        <div>
          <img src={assets.real_logo} alt="real_logo" />
        </div>
        <div className="lng-btn">
          <div
            onClick={() => alert("Successfully changed to Spanish")}
            className="lng-es"
          >
            ES
          </div>
          <div
            onClick={() => alert("Successfully changed to English")}
            className="lng-en"
          >
            EN
          </div>
        </div>
      </div>
      <p>Welcome!</p>
      <div className="sing-in-accnt">Sign in or create your account:</div>
      <input name="myInput" defaultValue="Email/Socio No./Madridista No." />
      <div className="sign-in-btn">Continue</div>
      <div className="cnt-lg-in">Can't log in</div>
      <div>heo</div>
      <div className="sign-in-btn">Continue</div>
      <div className="sign-in-btn">Continue</div>
      <div className="spt-txt-btm">
        We will use your email address to check if you already have an account.
        You can exercise your rights at <span>oposicion@corp.realmadrid.com</span> and get
        more information here.
      </div>
      <div className="footer-sign-in">
        <div>hello</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SignIn;
