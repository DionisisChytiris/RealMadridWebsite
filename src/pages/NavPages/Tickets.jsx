/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const Tickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
    <div>Tickets</div>
  </div>
  )
}

export default Tickets


const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'lightblue',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px'
}