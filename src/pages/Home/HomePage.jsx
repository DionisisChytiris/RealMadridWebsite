/* eslint-disable no-unused-vars */
import React from "react";
import FirstPost from "../../components/FirstPost/FirstPost";
import "./HomePage.css";
import SecondPost from "../../components/SecondPost/SecondPost";

const DivideLine = () => {
  return <div className="bisector" />;
};

const HomePage = () => {
  return (
    <>
      <FirstPost />
      <DivideLine />
      <SecondPost/>
      <DivideLine />
      <SecondPost/>
      <DivideLine />
    </>
  );
};

export default HomePage;
