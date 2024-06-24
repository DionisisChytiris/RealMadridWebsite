/* eslint-disable no-unused-vars */
import React from "react";
import "./StylesFT.css";
import img1 from "../../assets/FC/_80x501_COURTOIS_15.webp";
import img2 from "../../assets/FC/_80x501_LUNIN_15.webp";
import img3 from "../../assets/FC/_80x501_KEPA_15.webp";
import FirstTeamItem from "../../Templates/FirstTeamItem/FirstTeamItem";
import FTMenFC from "../../../data/FirstTeam/FTMenFC";

const data = [
  {
    link: "/",
    img: img1,
    number: 1,
    name: "Courtois",
    position: "Goalkeeper",
  },
  {
    link: "/tour",
    img: img2,
    number: 13,
    name: "Lunin",
    position: "Goalkeeper",
  },
  {
    link: "/",
    img: img3,
    number: 25,
    name: "Arrizabalaga",
    position: "Goalkeeper",
  },
];

const Squad = () => {
  const data1 = FTMenFC.filter((item) => item.position == "Goalkeeper");
  const data2 = FTMenFC.filter((item) => item.position == "Defender");
  const data3 = FTMenFC.filter((item) => item.position == "Midfielder");
  const data4 = FTMenFC.filter((item) => item.position == "Forward");
  return (
    <div className="ft-fc-men-cnt">
      {/* Goalkeeper */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Goalkeeper</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data1.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Defender */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Defender</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data2.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Midfielder */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Midfielder</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data3.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Forward */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Forward</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data4.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squad;

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
