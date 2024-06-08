/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Sponsors.css";
import { DataSponsors } from "../../../../data/Footer/Sponsors";
import SponsorItem from "./SponsorItem";

const Sponsors = () => {
  const data1 = DataSponsors.filter((item) => item.type == "a");
  const data2 = DataSponsors.filter((item) => item.type == "b");

  return (
    <div className="sponsors">
      <div className="sponsors1">
        {/* Large Icons */}
        {data1.map((item, index) => {
          return (
            <div key={index}>
              <SponsorItem
                link={item.link}
                href={item.href}
                img={item.img}
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
      {/* Small Icons */}
      <div className="sponsors2">
        {data2.map((item, index) => {
          return (
            <div key={index}>
              <SponsorItem
                link={item.link}
                href={item.href}
                img={item.img}
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
