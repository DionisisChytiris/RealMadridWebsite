/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <div>
          <img src={assets.hamburgerMenu} alt="" className="menuIcon" />
        </div>
        {/* <div className="icon">
          <IconContext.Provider value={{ color: "#43526e", size: "25px" }}>
            <div>
              <RxHamburgerMenu />
            </div>
          </IconContext.Provider>
        </div> */}

        <img src={assets.real_logo} alt="Logo" />
        <div className="line" />
        <img
          style={{ width: " 38px", height: "38px " }}
          src={assets.real_trophy}
          alt="Trophy"
        />
      </div>
      <div className="nav2">
        <a>Madridistas</a>
        <a>Tickets</a>
        <a>Hospitality</a>
        <a>Tour</a>
        <a>Shop</a>
        <a>RM Play</a>
      </div>
      <div className="nav3">
        <div className="icons">
          <img src={assets.emirates} alt="" className="emiratesIcon" />
          <img src={assets.adidas} alt="" className="adidasIcon" />
        </div>
        <div>.</div>
        <div className="signIn">Sign In</div>
      </div>
    </div>
  );
};

export default NavBar;
