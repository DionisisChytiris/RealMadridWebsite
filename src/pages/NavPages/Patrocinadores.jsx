/* eslint-disable no-unused-vars */
import React from "react";
import RealLogoTopSection from "../../Templates/RealLogoTopSection";
import './styles/patrocinadores.css'

const Patrocinadores = () => {
  return (
    <div>
      <RealLogoTopSection text="Listado Patrocinadores" />
      <div style={container}>
        <div className="listado-cnt">
            <div className="listado-lg-tx">FOOTBALL SPONSORS</div>
            <div className="listado-md-tx">MAIN SPONSORS</div>
            <div className="listado-sm-tx">
              <a>hello</a>
              <a>hello</a>
            </div>
            <div className="listado-md-tx">TOP TIER</div>
            <div className="listado-sm-tx">
              <a>hello</a>
              <a>hello</a>
            </div>
            <div className="listado-md-tx">GLOBAL SPONSORS</div>
            <div className="listado-sm-tx">
              <a>hello</a>
              <a>hello</a>
            </div>
            <div className="listado-md-tx">REGIONAL SPONSORS</div>
            <div className="listado-sm-tx">
              <a>hello</a>
              <a>hello</a>
            </div>

            <div className="listado-lg-tx">WOMEN&apos;S FOOTBALL SPONSORS</div>
            <div className="listado-md-tx">MAIN SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">TOP TIER</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">GLOBAL SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">REGIONAL SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>


            <div className="listado-lg-tx">BASKETBALL SPONSORS</div>
            <div className="listado-md-tx">MAIN SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">TOP TIER</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">GLOBAL SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="listado-md-tx">REGIONAL SPONSORS</div>
            <div className="listado-sm-tx">
              <div>hello</div>
              <div>hello</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;

const container={
    position: 'relative',
    zIndex: 99999,
    width: '100%',
    // height: '100vh',
    display :'flex',
    backgroundColor: 'white',
}
