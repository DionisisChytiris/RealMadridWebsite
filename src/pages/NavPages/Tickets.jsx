/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import UnderConstruction from "../../UnderConstruction";
import img from '../../assets/underConstruction/constr1.jpg'

const Tickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <img src={img} className="under-constr-img"/>
      <div className="under-constr-title">Tickets Page</div>
      <UnderConstruction />
    </div>
  );
};

export default Tickets;

const container = {
  width: "80%",
  height: "100vh",
  backgroundColor: "lightblue",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
};
const title = {
  position: "absolute",
  top: "40%",
  fontSize: "25px",
};
