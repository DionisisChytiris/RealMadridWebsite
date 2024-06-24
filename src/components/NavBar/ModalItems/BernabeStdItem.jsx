/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Modal.css";
import { BernabeuStData } from "../../../../data/NavBar/NavData";
import { IoIosArrowDown } from "react-icons/io";

const BernabeuStdItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md-cnt-dropdown">
      <div style={flexbox} onClick={() => setIsOpen(!isOpen)}>
        <div style={title}>Bernabéu Stadium</div>
        <div>
          <IoIosArrowDown
            style={{
              fontSize: 22,
              paddingBottom: 4,
              color: isOpen ? "black" : "lightgray",
              transition: "color 0.6s ease-in-out",
            }}
          />
        </div>
      </div>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {BernabeuStData.map((item, index) => {
          return (
            <div key={index} style={{paddingBottom:20}}>
              <a href={item.link} className="dropdown-item">
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BernabeuStdItem;

const title = {
  paddingBottom: 35,
  fontSize: 18,
  fontWeight: 600,
  color: "#2a4471",
};

const flexbox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
