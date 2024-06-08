/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const Tickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{width: '80%', height: 1200, backgroundColor: 'blue', margin: 'auto'}}>Tickets</div>
  )
}

export default Tickets