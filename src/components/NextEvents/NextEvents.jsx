/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "../PostNews/postStyle.css";
import "./NextEvents.css";
import { BsToggles2 } from "react-icons/bs";
import EventItem from "./EventItem";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const NextEvents = () => {
  const cardsRef = useRef(null);

  const handleWheel1r = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };
  const handleWheel1l = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="mediumSection">
        <div className="nxt-evnt">Next Events</div>
        <div className="filter-tms">
          <BsToggles2 style={{ color: "blue", fontSize: "14" }} />
          <div>Filter teams (1)</div>
        </div>
      </div>
      <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            top: 250,
            zIndex: 999,
          }}
          className="next-btns-ts"
        >
          <div onClick={handleWheel1r} className="next-arw-sd-btn">
            <RiArrowLeftSLine size={24} />
          </div>
          <div onClick={handleWheel1l} className="next-arw-sd-btn">
            <RiArrowRightSLine size={24} />
          </div>
        </div>

        {/* cards */}
          <div className="next-evnt-cards-cnt" ref={cardsRef}>
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
          </div>
      </div>
    </div>
  );
};

export default NextEvents;
