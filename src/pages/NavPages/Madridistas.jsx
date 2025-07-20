/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles/Madridistas.css";
import UnderConstruction from "../../UnderConstruction";
import img from '../../assets/underConstruction/constr2.jpg'

const Madridistas = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <div style={container}>
      <img src={img} className="under-constr-img"/>
      <div className="under-constr-title">Madridistas Page</div>
      <UnderConstruction />
    </div>
  );
};

export default Madridistas;

const container = {
  width: "80%",
  height: "100vh",
  backgroundColor: "lightgray",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
};

