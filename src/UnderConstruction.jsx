/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

const UnderConstruction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{width: '80%', height:400, margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       {/* <div style={{fontSize: 30, fontWeight: 600}}>🚧 This page is under construction. Please check back soon!</div>  */}
       <div style={{textAlign: 'center'}}>
          <div style={{fontSize: 40, fontWeight: 600}}>👷‍♂️ We&apos;re working on this page!</div>
          <div style={{fontSize: 25, fontWeight: 600, marginTop: 30}}>It’s not ready yet, but we’ll have something awesome here soon.</div>
        </div> 
    </div>
  )
}

export default UnderConstruction