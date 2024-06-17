/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from "react-dom";
import "./SignIn.css";
import { assets } from "../../assets/assets";
import { LuDot } from "react-icons/lu";

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
        You can exercise your rights at{" "}
        <span>oposicion@corp.realmadrid.com</span> and get more information
        here.
      </div>
      <div className="footer-sign-in">
        <div className="ft-sing-in-logo-bx">
          <div>
            <img src={assets.real_logo} alt="real_logo" />
          </div>
          <div className="txt-ft-lgin">Real Madrid © 2024. All rights reserved.</div>
        </div>
        <div className="ft-sing-in-logo-bx">
          <a>Legal notice</a>
          <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
          <a>Cookies policy</a>
          <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
          <a>Privacy policy</a>
          <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
          <a href="/">realmadrid.com</a>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SignIn;
