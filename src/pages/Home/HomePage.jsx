/* eslint-disable no-unused-vars */
import React from "react";
import {
  LargeItem1,
  SmallItem,
  Medium1Item,
  Medium2Item,
  SmallItem1,
  SmallItem2,
  Section6,
  Section2,
  Section3,
} from "../../components/PostNews/index";
import "./HomePage.css";

export const DivideLine = () => {
  return <div className="bisector" />;
};

const HomePage = () => {
  return (
    <div className="homeContainer">
      {/* Section 1 */}
      <LargeItem1 />
      <SmallItem1 />
      <div style={{ marginTop: "-50px" }}>
        <SmallItem2 />
      </div>
      <div style={{ marginTop: "-50px" }}>
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
      <div style={{ marginTop: "50px" }}>
        <SmallItem />
      </div>
      <div style={{ marginTop: "-50px" }}>
        <DivideLine />
      </div>
      {/* Section 5 */}
      <div style={{ marginTop: "50px" }}>
        <SmallItem />
      </div>
      <div style={{ marginTop: "-50px" }}>
        <DivideLine />
      </div>
      {/* Section 6 */}
      <div style={{ marginTop: "50px" }}>
        <Section6 />
      </div>
      <DivideLine />
    </div>
  );
};

export default HomePage;
