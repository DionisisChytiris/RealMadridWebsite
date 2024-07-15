/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Filter.css";
import { IoIosClose } from "react-icons/io";

const FilterModal = ({ show, onClose, open }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="filter-overlay">
      <div className="filter-center-box">
        <div className={`filter-content ${open ? "open" : ""}`}>
          <div className="flt-tp-line">
            <div onClick={()=>alert('hey')} className="flt-tx-bt1">Reset filters</div>
            <div onClick={onClose}><IoIosClose style={{color: 'gray', fontSize: 32}}/></div>
          </div>
          <div className="flt-main-title">Filter teams</div>

          <div className="flt-ft-bsk-cnt">
            <div className="flt-ft-left">
                <div>Football</div>
                <div>Football</div>
                <div>Football</div>
                <div>Football</div>
            </div>
            <div className="flt-bsk-right">
                <div>Basketball</div>
                <div>Basketball</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
