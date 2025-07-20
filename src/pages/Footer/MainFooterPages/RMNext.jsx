/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import img from '../../../assets/underConstruction/constr2.jpg'
import UnderConstruction from '../../../UnderConstruction';

const RMNext = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={container}>
      <img src={img} className="under-constr-img"/>
      <div className="under-constr-title">RMNext Page</div>
      <UnderConstruction/>
    </div>
  )
}

export default RMNext

const container = {
  width: "80%",
  height: "100vh",
  backgroundColor: "lightgray",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
};