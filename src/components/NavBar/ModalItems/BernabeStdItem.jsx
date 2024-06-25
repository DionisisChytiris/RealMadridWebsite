/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Modal.css";
import { BernabeuStData } from "../../../../data/NavBar/NavData";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const BernabeuStdItem = ({
  op4,
  setOp1,
  setOp2,
  setOp3,
  setOp4,
  setOp5,
  setOp6,
  setOp7,
  setOp8,
}) => {

  return (
    <div className="md-cnt-dropdown">
      <div style={flexbox} onClick={() => {
         setOp4(!op4), 
         setOp1(false);
         setOp2(false);
         setOp3(false);
         setOp5(false);
         setOp6(false);
         setOp7(false);
         setOp8(false);
      }}>
        <div style={title}>Bernabéu Stadium</div>
        <div  className='md-cnt-dropdown-down'>
            <IoIosArrowDown
              style={{
                fontSize: 22,
                paddingBottom: 4,
                color: op4 ? "black" : "#aeb4c5",
                transition: "color 0.5s ease",
              }}
            />
          </div>
          <div className='md-cnt-dropdown-right'>
            <IoIosArrowForward
              style={{
                fontSize: 22,
                paddingBottom: 4,
                color: op4 ? "black" : "#aeb4c5",
                transition: "color 0.5s ease",
              }}
            />
          </div>
      </div>
      <div className={`dropdown-menu ${op4 ? "open" : ""}`}>
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
  width: '54%'
};
