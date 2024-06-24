/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import '../Modal.css'
import { IoIosArrowDown } from "react-icons/io";

const BasketballItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="md-cnt-dropdown" >
        <div style={flexbox} onClick={()=>setIsOpen(!isOpen)}>
          <div style={title}>Basketball</div>
          <div>
          <IoIosArrowDown style={{fontSize: 22, paddingBottom: 4,color: isOpen? 'black': '#aeb4c5', transition: 'color 0.6s ease-in-out'}}/>
          </div>
        </div>
        <div  className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <a href='/basketfirstteam' className="dropdown-item">Basketball First Team</a>
        </div>
      </div>
  )
}

export default BasketballItem


const title = {
    paddingBottom: 35,
    fontSize: 18,
    fontWeight: 600,
    color: "#2a4471",
  };
  
  const flexbox ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '54%'
  }