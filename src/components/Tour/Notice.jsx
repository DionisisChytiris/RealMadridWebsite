/* eslint-disable no-unused-vars */
import React from "react";
import "./tour.css";
import { LuDot } from "react-icons/lu";
import ImageSlider from "./ImageSlider";

const Notice = () => {
  return (
    <div className="ntc-cnt-tr-pg">
      <div className="ntc-bx-tr">
        <div className="ntc-tr-title-lg">Notice</div>
        <div className="ntx-tr-text-sm">
          (*) The itinerary will be temporarily reduced due to refurbishment
          works. You will be able to access the Museum, the 21st century model
          of the Santiago Bernabéu, take a photo with the Champions League
          trophy (optional), the panoramic view of the stadium and visit both
          the Madridista card area and the Official Store. Access to the
          changing rooms, benches, presidential box and press room is
          temporarily restricted.
        </div>
        <div className="ntx-tr-text-sm">
          Due to the various events taking place at the Santiago Bernabéu
          stadium, in addition to the refurbishment work, the route and opening
          times of the Bernabéu Tour may vary, and visitors will be informed of
          this on the website, at the ticket offices and at the entrance gate.
        </div>
        <div className="ntx-tr-text-sm">
          <span>The turf has been removed from the pitch.</span>
        </div>
        <div className="ntx-tr-text-sm">Due to organizational reasons,</div>

        <div style={{ marginBottom: '80px' }}>
          {dotData.map((item, index) => {
            return (
              <div key={index}>
                <div className="ntx-tr-text-dot">
                  <LuDot style={{ color: "#0f2145", fontSize: "25px" }} />
                  <div className="ntx-tr-text-sm-nospace">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ntc-bx-tr-slider">
        <ImageSlider/>
      </div>
    </div>
  );
};

export default Notice;

const dotData = [
  { text: "Friday 21 June, opening hours will be from 9:30 am to 5:00 pm." },
  { text: "Friday 28 June, the panoramic view will be closed from 5:00 pm." },
  { text: "Saturday 29 June, opening hours will be from 9:30 am to 2:30 pm." },
  {text: "Friday 5 July, the panoramic view will be closed from 5:00 pm."},
  {text: "Saturday 6 July, opening hours will be from 9:30 am to 3:00 pm."},
  {text: "Sunday 7 July, opening hours will be from 10:00 am to 3:00 pm."},
  {text: "Friday 12 July, the panoramic view will be closed."},
  {text: "Saturday 13 July, opening hours will be from 9:30 am to 11:30 am. The panoramic view will be closed."},
  {text: "Friday 19 July, the panoramic view will be closed from 5:00 pm."},
  {text: "Saturday 20 July, opening hours will be from 9:30 am to 3:00 pm."},
  {text: "Sunday 21 July, opening hours will be from 10:00 am to 3:00 pm."},
  {text: "Monday 22 July, opening hours will be from 9:30 am to 3:00 pm."},
  {text: "Tuesday 23 July, opening hours will be from 9:30 am to 3:00 pm."},
];
