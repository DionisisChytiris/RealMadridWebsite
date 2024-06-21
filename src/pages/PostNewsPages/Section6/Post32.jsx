/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assets } from "../../../assets/assets";

const Post32 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cnt-hm-sct1-pt1">
      <div className="cnt-hm-tx1-lg">Auctions and Collections coming soon!</div>
      <div className="cnt-hm-tx1-md">
        Santiago Bernabéu Stadium Memorabilia.
      </div>
      <div className="cnt-hm-tx1-md">
        We have recovered more than 100,000 unique pieces from the Stadium.
      </div>
      <div style={title}>Get your seat!</div>
      <div className="cnt-hm-img1">
        <img src={assets.vestuarios} alt="vestuarios" />
      </div>
      <div className="cnt-hm-tx1-extra-sm">NEWS. 26/09/2023</div>
    </div>
  );
};

export default Post32;

const title = {
  marginTop: "40px",
  fontSize: "30px",
  color: "var(--darkblue2)",
  fontWeight: 600,
  textDecoration: "underline",
};
