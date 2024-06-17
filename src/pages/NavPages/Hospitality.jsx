/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const Hospitality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div>Hospitality</div>
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