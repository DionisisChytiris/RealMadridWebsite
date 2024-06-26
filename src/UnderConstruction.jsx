/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const UnderConstruction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{width: '80%', height:400, margin: 'auto',backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       <div style={{fontSize: 30, fontWeight: 600}}>Page Under Construction</div> 
    </div>
  )
}

export default UnderConstruction