/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SignInModal.css";
import { assets } from "../../assets/assets";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const SingInModal = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="md-signIn-overlay">
      <div className="md-signIn-content">
        {/* Header */}
        <div className="md-nav-sign-in">
          <div>
            <img src={assets.real_logo} alt="md-real_logo" />
          </div>
          <div className="md-lng-btn">
            <div
              onClick={() => alert("Successfully changed to Spanish")}
              className="md-lng-es"
            >
              ES
            </div>
            <div
              onClick={() => alert("Successfully changed to English")}
              className="md-lng-en"
            >
              EN
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="md-sign-in-bx">
          <div className="md-title-wlc">Welcome!</div>
          <div className="md-sm-tl-acnt">Sign in or create your account:</div>
          <input name="myInput" defaultValue="Email/Socio No./Madridista No." />
          <div className="md-bt-cnt-1">
            <div>Continue</div>
          </div>

          <div className="cnt-lg-in">Can&apos;t log in?</div>
          <div className="line-or-line">
            <div className="line-side"></div>
            <div className="line-or-cnt">OR</div>
            <div className="line-side"></div>
          </div>
          <div className="md-bt-cnt-1">Continue</div>
          <div className="md-bt-cnt-1">Continue</div>

          <div className="line-bottom"></div>
          <div className="btm-text-info">
            We will use your email address to check if you already have an
            account. You can exercise your rights at
            oposicion@corp.realmadrid.com and get more information here.
          </div>
        </div>

        {/* footer */}
        <div className="md-footer-sign-in">
          <div className="md-ft-sing-in-logo-bx">
            <div>
              <img src={assets.real_logo} alt="real_logo" />
            </div>
            <div className="md-txt-ft-lgin">
              Real Madrid © 2024. All rights reserved.
            </div>
          </div>
          <div className="md-line-ts"></div>
          <div className="md-ft-sing-in-logo-bx right">
            <a>Legal notice</a>
            <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
            <a>Cookies policy</a>
            <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
            <a>Privacy policy</a>
            <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
            <a href="/">realmadrid.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingInModal;

// <div className="modal-signIn">
//   <div className="md-sign-in">
//     <div className="md-nav-sign-in">
//       <div>
//         <img src={assets.real_logo} alt="md-real_logo" />
//       </div>
//       <div className="md-lng-btn">
//         <div
//           onClick={() => alert("Successfully changed to Spanish")}
//           className="md-lng-es"
//         >
//           ES
//         </div>
//         <div
//           onClick={() => alert("Successfully changed to English")}
//           className="md-lng-en"
//         >
//           EN
//         </div>
//       </div>
//     </div>

//     <p>Welcome!</p>
//     <div className="md-sing-in-accnt">Sign in or create your account:</div>
//     <input
//       name="md-myInput"
//       defaultValue="Email/Socio No./Madridista No."
//     />
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-cnt-lg-in">Can&apos;t log in</div>
//     <div>heo</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-sign-in-btn">Continue</div>
//     <div className="md-spt-txt-btm">
//       We will use your email address to check if you already have an
//       account. You can exercise your rights at{" "}
//       <span>oposicion@corp.realmadrid.com</span> and get more information
//       here.
//     </div>

//     <div className="md-footer-sign-in">
//       <div className="md-ft-sing-in-logo-bx">
//         <div>
//           <img src={assets.real_logo} alt="real_logo" />
//         </div>
//         <div className="md-txt-ft-lgin">
//           Real Madrid © 2024. All rights reserved.
//         </div>
//       </div>
//       <div className="md-ft-sing-in-logo-bx">
//         <a>Legal notice</a>
//         <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
//         <a>Cookies policy</a>
//         <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
//         <a>Privacy policy</a>
//         <LuDot style={{ color: "#0f2145", fontSize: "18px" }} />
//         <a href="/">realmadrid.com</a>
//       </div>
//     </div>
//   </div>
// </div>
