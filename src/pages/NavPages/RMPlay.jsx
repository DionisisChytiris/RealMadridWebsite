/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const RMPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div>RM Play</div>
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