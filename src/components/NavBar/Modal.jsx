/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../../../data/NavBar/NavData";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Modal.css";
import FootballItem from "./ModalItems/FootballItem";
import BasketballItem from "./ModalItems/BasketballItem";
import TheClubItem from "./ModalItems/TheClubItem";
import BernabeuStdItem from "./ModalItems/BernabeStdItem";
import NewsItem from "./ModalItems/NewsItems";
import FoundationRMItem from "./ModalItems/FoundationRM";
import RMGraduateScItem from "./ModalItems/RMGraduateSc";
import OnlineShopItem from "./ModalItems/OnlineShop";
import { assets } from "../../assets/assets";

const Modal = ({ show, onClose, open }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${open ? "open" : ""}`}>
        <button onClick={onClose} className="modal-close">
          &times;
        </button>
        <div className="md-ct-nav-cnt">
          <div className="md-ct-left-cnt">
            {/* Section 1 */}
            <div className="md-cnt-sct1">
              {NavData.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={item.link} onClick={onClose}>
                      <div style={title}>{item.title}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Section 2 */}
            <div className="md-cnt-sct2">
              <FootballItem />
              <BasketballItem />
              {/* Schedule */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <a href="schedule" style={title} onClick={onClose}>
                    Schedule
                  </a>
                </div>
              </div>
              {/* RMTV live */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <a href="rmtvlive" style={title} onClick={onClose}>
                    RMTV live
                  </a>
                </div>
              </div>

              <TheClubItem />
              <BernabeuStdItem />
              <NewsItem />
              <FoundationRMItem />
              <RMGraduateScItem />
              {/* RM Next */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <a href="rmnext" style={title} onClick={onClose}>
                    RM Next
                  </a>
                </div>
              </div>

              <OnlineShopItem />
            </div>
            {/* Section 3 */}
            <div className="md-cnt-sct3">
              <div style={{ marginBottom: 20, marginTop: -15 }}>
                <img
                  src={assets.emirates}
                  alt=""
                  style={{ marginRight: 30, width: 50, height: 50 }}
                />
                <img
                  src={assets.adidas}
                  alt=""
                  style={{ width: 50, height: 50 }}
                />
              </div>
              <div>
                <a href="/patrocinadores">See all sponsors</a>
              </div>
            </div>

            <div className="md-cnt-sct4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <HiMiniLanguage style={{ fontSize: 24, color: "darkblue" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                  onClick={() => alert("hello")}
                >
                  <div style={{ color: "darkblue", fontSize: 16 }}>EN</div>
                  <IoIosArrowUp style={{ fontSize: 18, color: "darkblue" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const title = {
  paddingBottom: 35,
  fontSize: 18,
  fontWeight: 600,
  color: "#2a4471",
};

const flexbox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
