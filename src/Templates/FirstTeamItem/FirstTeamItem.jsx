/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./FirstTeamItem.css";

const FirstTeamItem = ({ img, number, name, position }) => {
  return (
    <>
      <Link to="/" className="first-team-img-item">
        {/* <img src={img} alt="" /> */}
        <img
          src={img}
          alt={name}
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add("loaded")}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/players/default.png";
          }}
          style={imgStyle}
        />
        <div style={gradientBx}>
          <div style={numName}>
            <div style={{ color: "white", fontSize: 55, fontWeight: 600 }}>
              {number}
            </div>
            <div style={{ flexDirection: "column" }}>
              <div
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  marginLeft: 12,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  color: "var(--lightgray3)",
                  fontSize: 16,
                  marginLeft: 12,
                  marginTop: 5,
                }}
              >
                {position}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FirstTeamItem;

const gradientBx = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40%",
  background: "linear-gradient(to top, blue, rgba(0,0,0,0.01))",
};

const numName = {
  position: "absolute",
  bottom: 20,
  left: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const imgStyle = {
  width: "100%", // or whatever fits your layout
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  // backgroundColor: 'yellow'
};
