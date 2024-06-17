/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={container}>
      <div>Shop</div>
    </div>
  )
}

export default Shop


const container = {
  width: '80%',
  height: '100vh',
  backgroundColor: 'lightpink',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30px'
}