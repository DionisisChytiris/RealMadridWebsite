/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { DiBackbone } from "react-icons/di";

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
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    position: 'fixed',
    top: `${top}px`,
    transition: 'top 0.8s',
    display: 'flex',
    backgroundColor: 'var(--white)',
    width: '100%',
    height: '63px',
    padding: '0px 40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid var(--lightgray1)',
  };

  return (
    <div  style={navbarStyle}>
    {/* <div className="navbar" style={navbarStyle}> */}
      {/* <div style={linkStyle}> */}
      <div className="nav1" >
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
      <div className="nav2">
        <Link to="/madridistas">Madridistas</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/hospitality">Hospitality</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/rmplay">RM Play</Link>
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
        <div className="signIn">Sign In</div>
      </div>
    </div>
  );
};

export default NavBar;
