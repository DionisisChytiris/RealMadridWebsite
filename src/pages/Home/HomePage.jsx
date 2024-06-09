/* eslint-disable no-unused-vars */
import React from "react";
import {FirstPost, SecondPost, ThirdPost} from '../../components/PostNews/index'
import './HomePage.css'


const DivideLine = () => {
  return <div className="bisector" />;
};

const HomePage = () => {
  return (
    <div className="homeContainer">
      <FirstPost />
      <SecondPost/>
      <DivideLine />
      <ThirdPost/>
      <DivideLine />
      {/* <ThirdPost/> */}
      <div style={{marginTop: '50px'}}>
        <SecondPost/>
      </div>
      <DivideLine />
    </div>
  );
};

export default HomePage;
