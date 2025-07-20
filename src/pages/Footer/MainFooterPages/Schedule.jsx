/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import UnderConstruction from '../../../UnderConstruction';
import img from '../../../assets/underConstruction/constr2.jpg'

const Schedule = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
     <div style={container}>
      <img src={img} className="under-constr-img"/>
      <div className="under-constr-title">Schedule Page</div>
      <UnderConstruction />
    </div>
  )
}

export default Schedule

const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'lightgreen',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px'
}
