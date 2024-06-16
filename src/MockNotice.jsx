/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const MockNotice = () => {
    const [show, setShow] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>
      {show ? (
        <div onClick={()=>setShow(false)}>
          <div style={mock} className="mock-bx"> 
            <div>Mock Notice</div>
            <div style={{marginTop: '80px'}}>Click anywhere to remove the window</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MockNotice;

const mock = {
  width: "70%",
  margin: "auto",
  height: "200px",
  backgroundColor: " aqua",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};
