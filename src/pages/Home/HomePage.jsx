/* eslint-disable no-unused-vars */
import React from "react";
import {
  LargeItem1,
  SmallItem,
  SmallItem1,
  SmallItem2,
  Section6,
  Section2,
  Section3,
  Section5,
  Section4,
  Section1,
} from "../../components/PostNews/index";
import "./HomePage.css";

export const DivideLine = () => {
  return <div className="bisector" />;
};

const HomePage = () => {
  return (
    <div className="homeContainer">
      <Section1 />
      <div style={{ marginTop: "-3%" }}>
        <DivideLine />
      </div>
      {/* Section 2 */}
      <div style={{ margin: "40px 0px" }}>
        <Section2 />
      </div>
      <DivideLine />
      {/* Section 3 */}
      <Section3 />
      <DivideLine />
      {/* Section 4*/}
      <Section4 />
      <div style={{ marginTop: "-6%" }}>
        <DivideLine />
      </div>
      {/* Section 5 */}
      <Section5 />
      {/* Section 6 */}
      <div style={{ marginTop: "50px" }}>
        <Section6 />
      </div>
    </div>
  );
};

export default HomePage;
