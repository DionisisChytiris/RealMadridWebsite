/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import '../Modal.css'
import { IoIosArrowDown } from "react-icons/io";

const FootballItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="md-cnt-dropdown">
        <div style={flexbox} onClick={() => setIsOpen(!isOpen)}>
          <div style={title}>Football</div>
          <div>
            <IoIosArrowDown
              style={{
                fontSize: 22,
                paddingBottom: 4,
                color: isOpen ? "black" : "#aeb4c5",
                transition: "color 0.5s ease",
              }}
            />
          </div>
        </div>
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <a href="/firstteam" className="dropdown-item">
            First Team
          </a>
          <a href="/womensteam" className="dropdown-item">
            Women&apos;s Team
          </a>
          <a href="/academy" className="dropdown-item">
            Academy
          </a>
        </div>
      </div>
  )
}

export default FootballItem


const title = {
    paddingBottom: 35,
    fontSize: 18,
    fontWeight: 600,
    color: "#2a4471",
  };
  
  const flexbox ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '54%'
  }