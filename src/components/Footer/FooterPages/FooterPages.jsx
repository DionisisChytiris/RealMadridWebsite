/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterPages.css";
import { DataFt } from "../../../../data/Footer/DataFt";

const FooterPages = () => {
  const data1 = DataFt.filter((item) => item.type == "Ftb1");
  const data2 = DataFt.filter((item) => item.type == "Ftb2");
  const data3 = DataFt.filter((item) => item.type == "Ftb3");
  const data4 = DataFt.filter((item) => item.type == "Ftb4");
  const data5 = DataFt.filter((item) => item.type == "Ftb5");
  return (
    <div className="footerPages">
      <div className="foot-container">
        <div className="ft-bx-ts1">
          <div className="foot1 section1">
            {data1.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.link}>
                    <div className="ft-tl-1 lrg-bx">{item.title1}</div>
                    {/* show only under width=950px */}
                    <div className="ft-tl-1-sm-bx">
                      <div className="ft-tl-1">{item.title1}</div>
                      <div className="ft-tl-arrow">{item.arrow}</div>
                    </div>
                    {/*  */}
                    <div className="ft-tl-2">{item.title}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="foot1 section1">
            {data2.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.link}>
                    <div className="ft-tl-1 lrg-bx">{item.title1}</div>
                      {/* show only under width=950px */}
                      <div className="ft-tl-1-sm-bx">
                      <div className="ft-tl-1">{item.title1}</div>
                      <div className="ft-tl-arrow">{item.arrow}</div>
                    </div>
                    {/*  */}
                    <div className="ft-tl-2">{item.title}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="foot1 section1">
            {data3.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.link}>
                    <div className="ft-tl-1 lrg-bx">{item.title1}</div>
                      {/* show only under width=950px */}
                      <div className="ft-tl-1-sm-bx">
                      <div className="ft-tl-1">{item.title1}</div>
                      <div className="ft-tl-arrow">{item.arrow}</div>
                    </div>
                    {/*  */}
                    <div className="ft-tl-2">{item.title}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ft-bx-ts2">
          <div className="foot1 section2">
            {data4.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.link}>
                    <div className="ft-tl-3">{item.title1}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="foot1 section3">
            {data5.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.link}>
                    <div className="ft-tl-3">{item.title1}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footerline"></div>
    </div>
  );
};

export default FooterPages;
