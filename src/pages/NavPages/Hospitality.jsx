/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import UnderConstruction from '../../UnderConstruction';

const Hospitality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div style={title}>Hospitality Page</div>
      <UnderConstruction/>
    </div>
  )
}

export default Hospitality


const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'lightgreen',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px'
}

const title={
  position: 'absolute',
  top: '40%',
  fontSize: '25px'
}