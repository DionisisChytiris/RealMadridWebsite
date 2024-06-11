/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import './Post30.css'

const Post30 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{width: '80%', margin: 'auto', backgroundColor: 'magenta', height: '700px'}}>Post30</div>
  )
}

export default Post30