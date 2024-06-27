/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  const [op1, setOp1] = useState(false); //Football
  const [op2, setOp2] = useState(false); //Basketball
  const [op3, setOp3] = useState(false); //The club
  const [op4, setOp4] = useState(false); //Bernabeu
  const [op5, setOp5] = useState(false); //News
  const [op6, setOp6] = useState(false); //Foundation
  const [op7, setOp7] = useState(false); //RM Graduate
  const [op8, setOp8] = useState(false); //OnlineShop
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
              <FootballItem
                op1={op1}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              <BasketballItem 
                op2={op2}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8} 
                closeMd={onClose}
                />
              {/* Schedule */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <Link to="/schedule" style={title} onClick={onClose}>
                    Schedule
                  </Link>
                </div>
              </div>
              {/* RMTV live */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <Link to="/rmtvlive" style={title} onClick={onClose}>
                    RMTV live
                  </Link>
                </div>
              </div>

              <TheClubItem 
                op3={op3}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              <BernabeuStdItem 
                op4={op4}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              <NewsItem 
                op5={op5}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              <FoundationRMItem 
                op6={op6}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              <RMGraduateScItem 
                op7={op7}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
              {/* RM Next */}
              <div className="md-cnt-dropdown">
                <div style={flexbox}>
                  <Link to="/rmnext" style={title} onClick={onClose}>
                    RM Next
                  </Link>
                </div>
              </div>

              <OnlineShopItem 
                op8={op8}
                setOp1={setOp1}
                setOp2={setOp2}
                setOp3={setOp3}
                setOp4={setOp4}
                setOp5={setOp5}
                setOp6={setOp6}
                setOp7={setOp7}
                setOp8={setOp8}
                closeMd={onClose}
              />
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
                <Link to="/patrocinadores" onClick={onClose}>See all sponsors</Link>
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
