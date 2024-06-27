/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Modal.css";
import {  RMGraduateScData } from "../../../../data/NavBar/NavData";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RMGraduateScItem = ({
  op7,
  setOp1,
  setOp2,
  setOp3,
  setOp4,
  setOp5,
  setOp6,
  setOp7,
  setOp8,
  closeMd
}) => {

  return (
    <div className="md-cnt-dropdown">
      <div style={flexbox} onClick={() => {
         setOp7(!op7), 
         setOp1(false);
         setOp2(false);
         setOp3(false);
         setOp4(false);
         setOp5(false);
         setOp6(false);
         setOp8(false);
      }}>
        <div style={title}>RM Graduate School</div>
        <div  className='md-cnt-dropdown-down'>
            <IoIosArrowDown
              style={{
                fontSize: 22,
                paddingBottom: 4,
                color: op7? "black" : "#aeb4c5",
                transition: "color 0.5s ease",
              }}
            />
          </div>
          <div className='md-cnt-dropdown-right'>
            <IoIosArrowForward
              style={{
                fontSize: 22,
                paddingBottom: 4,
                color: op7? "black" : "#aeb4c5",
                transition: "color 0.5s ease",
              }}
            />
          </div>
      </div>
      <div className={`dropdown-menu ${op7? "open" : ""}`}>
        {RMGraduateScData.map((item, index) => {
          return (
            <div key={index} style={{paddingBottom:20}}>
              <Link to={item.link} onClick={closeMd}  className="dropdown-item">
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RMGraduateScItem;

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
