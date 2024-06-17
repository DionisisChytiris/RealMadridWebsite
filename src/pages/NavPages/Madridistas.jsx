/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const Madridistas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div>Madridistas</div>
    </div>
  )
}

export default Madridistas

const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'lightgray',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px'
}