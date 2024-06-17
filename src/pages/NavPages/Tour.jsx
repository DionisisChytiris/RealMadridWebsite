/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { assets } from "../../assets/assets";

const Tour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={bgImg}/>
      <div style={{width: '100%', height:'100vh', zIndex: 999, position: 'relative'}}>
        <div style={{width: '200px', height: '300px', backgroundColor: 'yellow', margin: 'auto'}}>hey</div>
        <div style={{width: '200px', height: '300px', backgroundColor: 'yellow', margin: 'auto'}}>hey</div>
        <div style={{width: '200px', height: '300px', backgroundColor: 'yellow', margin: 'auto'}}>hey</div>
        <div style={{width: '200px', height: '300px', backgroundColor: 'yellow', margin: 'auto'}}>hey</div>
        <div style={{width: '200px', height: '300px', backgroundColor: 'yellow', margin: 'auto'}}>hey</div>
       
      </div>
    </div>
  );
};

export default Tour;

const bgImg = {
  backgroundImage: `url(${assets.BernabeuMuseum})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  bottom: 0,
  zIndex: 1,
};
