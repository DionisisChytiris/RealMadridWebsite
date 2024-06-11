/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Sponsors.css";
import { DataSponsors } from "../../../../data/Footer/Sponsors";
import SponsorItem from "./SponsorItem";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaPercentage,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { assets } from "../../../assets/assets";

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
      <div className="social">
        <div>
          <img src={assets.real_logo} alt="logo" />
        </div>
        <div className="socialBox">
          <a href="https://www.facebook.com/RealMadrid/" target="_blank">
            <FaFacebook style={{ color: "#0f2145", fontSize: "25px" }} />
          </a>
          <a href="https://www.instagram.com/realmadrid/" target="_blank">
            <FaInstagram style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://x.com/realmadrid" target="_blank">
            <FaXTwitter style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://www.youtube.com/realmadrid" target="_blank">
            <FaYoutube style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://onefootball.com/en/team/real-madrid-26" target="_blank">
            <FaPercentage style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://www.twitch.tv/realmadrid" target="_blank">
            <FaTwitch style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://www.snapchat.com/add/realmadrid" target="_blank">
            <FaSnapchatGhost style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
          <a href="https://www.tiktok.com/@realmadrid?lang=en" target="_blank">
            <FaTiktok style={{ color: "#0f2145", fontSize: "27px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
