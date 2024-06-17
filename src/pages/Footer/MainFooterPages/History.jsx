/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>History</div>
  )
}

export default History