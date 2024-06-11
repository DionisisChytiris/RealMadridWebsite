/* eslint-disable no-unused-vars */
import React from "react";
import {LargeItem, SmallItem, Medium1Item,Medium2Item} from '../../components/PostNews/index'
import './HomePage.css'

const DivideLine = () => {
  return <div className="bisector" />;
};

const HomePage = () => {
  return (
    <div className="homeContainer">
      <LargeItem />
      <SmallItem/>
      <SmallItem/>
      <DivideLine />
      <Medium1Item/>
      <Medium2Item/>
      <DivideLine />
      {/* <Medium1Item/> */}
      <div style={{marginTop: '50px'}}>
        <SmallItem/>
      </div>
      <DivideLine />
    </div>
  );
};

export default HomePage;
