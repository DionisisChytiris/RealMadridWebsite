/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import UnderConstruction from '../../UnderConstruction';

const RMPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div style={title}>RMPlay Page</div>
      <UnderConstruction/>
    </div>
  )
}

export default RMPlay


const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'orange',
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