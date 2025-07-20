/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const UnderConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="under-construction">
      <div style={{ textAlign: "center" }}>
        <div className="under-construction-title1">
          👷‍♂️ We&apos;re working on this page!
        </div>
        <div className='under-construction-title2'>
          It’s not ready yet, but we’ll have something awesome here soon.
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
