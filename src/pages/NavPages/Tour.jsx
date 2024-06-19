/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import TourTickets from "../../components/Tour/TourTickets";
import Notice from "../../components/Tour/Notice";
import ComeToTour from "../../components/Tour/ComeToTour";
import FQA from "../../components/Tour/FQA";

const Tour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={bgImg}/>
      <div style={{width: '100%', zIndex: 999, position: 'relative', marginBottom: '-180px'}}>
        <TourTickets/>
        <Notice/>
        <ComeToTour/>
        <FQA/>
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
  // height: "1000px",
  position: "fixed",
  top: 0,
  bottom: 0,
  zIndex: 1,
};
