/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavData } from "../../../data/NavBar/NavData";
import { assets } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { DiBackbone } from "react-icons/di";
import { FaRegUser } from "react-icons/fa6";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const NavBar = () => {
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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={navbarStyle}>
      <div className="nav1">
        <div onClick={handleOpenModal}>
          <img src={assets.hamburgerMenu} alt="" className="menuIcon" />
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
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Modal show={showModal} onClose={handleCloseModal} />
      {/* <h1>Modal Content</h1> */}
      {/* <p>This is the content of the modal</p>
      </Modal> */}
      <div className="nav2">
        {NavData.map((item, index)=>{
          return(
            <div key={index}>
              <NavLink
                to={item.link}
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "#21416E",
                })}
              >
                {item.title}
              </NavLink>
              
            </div>
          )
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
          <div>.</div>
        </div>
        <div className="signIn">
          <div>
            <FaRegUser color="blue" size={14} />
          </div>
          <div className="signTitle">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
