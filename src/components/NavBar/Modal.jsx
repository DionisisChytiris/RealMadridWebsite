/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavData } from "../../../data/NavBar/NavData";
import { IoIosArrowDown } from "react-icons/io";
import "./Modal.css"; // Create a CSS file for styling

const Modal = ({ show, onClose, open }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      {/* <div className={`modal-content ${open ? 'open' : ''}`}> */}
      <div className="modal-content">
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
              <div style={flexbox}>
                <div style={title}>Football</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <div style={flexbox}>
                <div style={title}>Basketball</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <a href='schedule' style={title} onClick={onClose}>Schedule</a>
              <a href='rmtvlive' style={title} onClick={onClose}>RMTV live</a>
              <div style={flexbox}>
                <div style={title}>The Club</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <div style={flexbox}>
                <div style={title}>Bernabéu Stadium</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <div style={flexbox}>
                <div style={title}>News</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <div style={flexbox}>
                <div style={title}>Foundation Real Madrid</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <div style={flexbox}>
                <div style={title}>RM Graduate School</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
              <a href='rmnext' style={title} onClick={onClose}>RM Next</a>
              <div style={flexbox}>
                <div style={title}>Online Shop</div>
                <div>
                <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: 'lightgray'}}/>
                </div>
              </div>
            </div>
            {/* Section 3 */}
            <div className="md-cnt-sct3">
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
              <div>helo</div>
            </div>

            <div className="md-cnt-sct4">
              <div>heloasdf asdfs adfs </div>
              <div>helo</div>
            </div>
          </div>
          {/* <div className="md-ct-right-cnt">
            <div className="md-cnt-sct1-sbct">
              <div onClick={() => alert("hello")}>Allert</div>
              <div onClick={() => alert("hello")}>Allert</div>
              <div>helo</div>
            </div>

            <div className="md-cnt-sct2">
              <div>helo</div>
              <div>helo</div>
            </div>
            <div className="md-cnt-sct3">
              <div>helo</div>
              <div>helo</div>
            </div>

            <div className="md-cnt-sct4">
              <div>helo</div>
              <div>helo</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

const title = {
  paddingBottom: 25,
  fontSize: 18,
  fontWeight: 600,
  color: "#2a4471",
};

const flexbox ={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}
