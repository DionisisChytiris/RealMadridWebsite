/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavData } from "../../../data/NavBar/NavData";
import { assets } from "../../assets/assets";
import { FaRegUser } from "react-icons/fa6";
import Modal from "./Modal";

const NavBar = ({ setShowLogin }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [top, setTop] = useState(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-63); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    position: "fixed",
    top: `${top}px`,
    transition: "top 0.8s",
    display: "flex",
    backgroundColor: "var(--white)",
    width: "100%",
    height: "63px",
    zIndex: 9999,
    padding: "0px 25px",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid var(--lightgray1)",
  };

  const [showModal, setShowModal] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollDisabled]);

  const handleOpenModal = () => {
    setShowModal(!showModal);
    setScrollDisabled(!scrollDisabled);
    setBackgroundColor(showModal ? 'transparent': '#c4e1fb')
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setScrollDisabled(false);
    setBackgroundColor('transparent')
  };

  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const menuIc={
    backgroundColor: backgroundColor,
    transition: 'background-color 0.5s ease',
    borderRadius: '8px',
  }

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div style={navbarStyle} >
      <div className="nav1">
        <div onClick={handleOpenModal}>
          <img src={assets.hamburgerMenu} alt="" style={menuIc}className="menuIcon" />
        </div>
        <Link to="/">
          <img src={assets.real_logo} alt="Logo" />
        </Link>
        <div className="line" />
        <img
          style={{ width: " 38px", height: "38px " }}
          src={assets.real_trophy}
          alt="Trophy"
        />
      </div>
      <Modal show={showModal} onClose={handleCloseModal} />
      <div className="nav2">
        {NavData.map((item, index) => {
          return (
            <div key={index} >
              <NavLink
                to={item.link}
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "#21416E",
                })}
              >
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="nav3">
        <div className="icons">
          <a href="https://www.emirates.com/us/english/" target="_blank">
            <img src={assets.emirates} alt="" className="emiratesIcon" />
          </a>
          <a href="https://www.adidas.co.uk/football" target="_blank">
            <img src={assets.adidas} alt="" className="adidasIcon" />
          </a>
          <div className="dots-ts" >
            <Link to="/patrocinadores">
              <img src={assets.dots} alt="dots" className="dots" />
            </Link>
          </div>
        </div>
        <button
          onClick={() => (setShowLogin(true), setScrollDisabled(true))}
          className="signIn"
        >
          <div>
            <FaRegUser color="blue" size={14} />
          </div>
          <div className="signTitle">
            {/* <Link to='/signin'>Sign in</Link> */}
            <div>Sign in</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
