/* eslint-disable no-unused-vars */
import React from "react";
import { TbGridDots } from "react-icons/tb";
import { BsClockFill,BsArrowUpRight } from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const FQA = () => {
  return (
    <div className="ntc-cnt-tr-pg">
      <div className="ntx-org-yr-vst">
        <div className="ntc-bx-tr-fqa bx-1">
          <div className="org-yr-vst-title">Organise your visit</div>
          <div className="org-yr-cnt">
            <div className="org-yr-cnt-bx1">
              <TbGridDots style={{ color: "#0f2145", fontSize: "25px" }} />
            </div>
            <div className="org-yr-cnt-bx2">
              <div className="org-yr-op-tm1">
                Open every day of the year except 25 December and 1 January.
              </div>
              <div className="org-yr-op-tm2">
                <BsClockFill style={{ color: "#0f2145", fontSize: "20px" }} />
              </div>
            </div>
            <div className="org-yr-cnt-bx2">
              <div className="org-yr-op-tm1 mts">
                <p>Monday to Saturday:</p>
                <div className="time-tbl">09:30-19:00</div>
                <p>Sundays and public holidays:</p>
                <div className="time-tbl">10:00-18:30</div>
                <p>Ticket office closed:</p>
                <div className="time-tbl">14:30-15:30</div>
              </div>
              <div className="org-yr-op-tm2 tp2">
                <HiQuestionMarkCircle style={{ color: "#0f2145", fontSize: "25px" }}/>
              </div>
            </div>
            <div className="org-yr-cnt-bx4">
              <div className="org-yr-op-tm1 ">
                <div className="org-email">tour@corp.realmadrid.com</div>
                <div className="org-email">+34 913 984 370</div>
              </div>
              <div className="org-yr-op-tm2">
              <IoLocationSharp style={{ color: "#0f2145", fontSize: "28px" }}/>
              </div>
            </div>
            <div className="org-yr-cnt-bx5">
              <div className="org-yr-op-tm5">
                <p>Av. de Concha Espina</p>
                <p>1, 28036</p>
                <p>Madrid</p>
                <div className="get-there">
                  <p>How to get there</p>
                  <BsArrowUpRight style={{ color: 'blue', fontSize: "12px" }}/>
                </div>
              </div>
           
            </div>

          </div>
        </div>
      </div>
      <div className="ntc-bx-tr-fqa">
        <div style={{ backgroundColor: "lightblue" }}>
          Frequesntly Asked Questions
        </div>
      </div>
    </div>
  );
};

export default FQA;
