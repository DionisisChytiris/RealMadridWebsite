/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Modal.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const BasketballItem = ({
  op2,
  setOp1,
  setOp2,
  setOp3,
  setOp4,
  setOp5,
  setOp6,
  setOp7,
  setOp8,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md-cnt-dropdown">
      {/* <div style={flexbox} onClick={()=>setIsOpen(!isOpen)}> */}
      <div
        style={flexbox}
        onClick={() => {
          setOp2(!op2), 
          setOp1(false);
          setOp3(false);
          setOp4(false);
          setOp5(false);
          setOp6(false);
          setOp7(false);
          setOp8(false);
        }}
      >
        <div style={title}>Basketball</div>
        <div className="md-cnt-dropdown-down">
          <IoIosArrowDown
            style={{
              fontSize: 22,
              paddingBottom: 4,
              color: op2 ? "black" : "#aeb4c5",
              transition: "color 0.5s ease",
            }}
          />
        </div>
        <div className="md-cnt-dropdown-right">
          <IoIosArrowForward
            style={{
              fontSize: 22,
              paddingBottom: 4,
              color: op2 ? "black" : "#aeb4c5",
              transition: "color 0.5s ease",
            }}
          />
        </div>
      </div>
      <div className={`dropdown-menu ${op2 ? "open" : ""}`}>
        <a href="/basketfirstteam" className="dropdown-item">
          Basketball First Team
        </a>
      </div>
    </div>
  );
};

export default BasketballItem;

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
  width: "54%",
};
