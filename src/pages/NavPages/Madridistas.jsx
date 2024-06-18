/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './styles/Madridistas.css'

const Madridistas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={container}>
      <div 
       className={`box ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
        // style={{padding: '40px', backgroundColor: 'lightgreen',transition:' backgroundColor 0.3s ease, transform 0.3s ease'}}
      >Madridistas</div>
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
