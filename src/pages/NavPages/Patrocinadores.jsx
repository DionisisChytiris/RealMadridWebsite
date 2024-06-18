/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import RealLogoTopSection from "../../Templates/RealLogoTopSection";
import "./styles/patrocinadores.css";

const Patrocinadores = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <RealLogoTopSection text="Listado Patrocinadores" />
      <div className="listado-cnt-main-ts">
      <div className="listado-cnt">
        <div className="listado-lg-tx">FOOTBALL SPONSORS</div>
        <div className="listado-md-tx">MAIN SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/emirates">Emirates</a>
          <a href="/adidas">Adidas</a>
        </div>
        <div className="listdo-sp-btm-ts" />
        <div className="listado-md-tx">TOP TIER</div>
        <div className="listado-sm-tx">
          <a href="/hp">HP</a>
        </div>
        <div className="listdo-sp-btm-ts" />
        <div className="listado-md-tx">GLOBAL SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/mahou">Mahou</a>
          <a href="/dubai">Dubai</a>
          <a href="/bmw">BMW</a>
          <a href="/easports">EA Sports</a>
          <a href="/abbott">Abbott</a>
          <a href="/nivea">Nivea Men</a>
          <a href="/cantabria">Cantabria Labs</a>
          <a href="/easymarkets">easyMarkets</a>
          <a href="/adobe">Adobe</a>
          <a href="/zegna">Zegna</a>
          <a href="/palladium">Palladium</a>
          <a href="/daktronics">Daktronics</a>
          <a href="/cisco">Cisco</a>
          <a href="/softtek">Softtek</a>
          <a href="/canon">Canon Medical</a>
        </div>
        <div className="listado-md-tx">REGIONAL SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/unicaja">Unicaja</a>
          <a href="/playstation">PlayStation</a>
          <a href="/">Codere</a>
          <a href="/sanitas">Sanitas</a>
          <a href="/cocacola">Coca-Cola</a>
          <a href="/solan">Solan de Cabras</a>
          <a href="/">Ouro</a>
          <a href="/">Kaiyun</a>
          <a href="/">HTP</a>
          <a href="/">SportyBet</a>
          <a href="/bantrab">Bantrab</a>
        </div>
        <div className="listdo-sp-btm-ts" />
        <div className="listado-lg-tx">WOMEN&apos;S FOOTBALL SPONSORS</div>
        <div className="listado-md-tx">MAIN SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/emirates">Emirates</a>
          <a href="/adidas">Adidas</a>
        </div>
        <div className="listdo-sp-btm-ts" />
        <div className="listado-md-tx">TOP TIER</div>
        <div className="listado-sm-tx">
          <a href="/hp">HP</a>
        </div>
        <div className="listdo-sp-btm-ts" />
        <div className="listado-md-tx">GLOBAL SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/mahou">Mahou</a>
          <a href="/dubai">Dubai</a>
          <a href="/bmw">BMW</a>
          <a href="/abbott">Abbott</a>
          <a href="/easymarkets">easyMarkets</a>
          <a href="/adobe">Adobe</a>
          <a href="/cisco">Cisco</a>
          <a href="/cantabria">Cantabria Labs</a>
          <a href="/zegna">Zegna</a>
          <a href="/softtek">Softtek</a>
          <a href="/canon">Canon Medical</a>
        </div>
        <div className="listado-md-tx">REGIONAL SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/unicaja">Unicaja</a>
          <a href="/playstation">PlayStation</a>
          <a href="/sanitas">Sanitas</a>
          <a href="/solan">Solan de Cabras</a>
          <a href="/">GrupoATValor</a>
        </div>

        <div className="listdo-sp-btm-ts" />
        <div className="listado-lg-tx">BASKETBALL SPONSORS</div>
        <div className="listado-md-tx">MAIN SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/adidas">Adidas</a>
          <a href="/">Autohero</a>
        </div>
        {/* <div className="listdo-sp-btm-ts" />
        <div className="listado-md-tx">TOP TIER</div>
        <div className="listado-sm-tx">
          <a href="/hp">HP</a>
        </div> */}
        {/* <div className="listdo-sp-btm-ts" /> */}
        <div className="listado-md-tx">GLOBAL SPONSORS</div>
        <div className="listado-sm-tx">
        <a href="/mahou">Mahou</a>
          <a href="/bmw">BMW</a>
          <a href="/zegna">Zegna</a>
          <a href="/palladium">Palladium</a>
          <a href="/canon">Canon Medical</a>
        </div>
        <div className="listado-md-tx">REGIONAL SPONSORS</div>
        <div className="listado-sm-tx">
          <a href="/unicaja">Unicaja</a>
          <a href="/playstation">PlayStation</a>
          <a href="/sanitas">Sanitas</a>
          <a href="/solan">Solan de Cabras</a>
          <a href="/cocacola">Coca-Cola</a>
        </div>
        <div className="listdo-sp-btm-ts" />
      </div>
    </div>
  </div>
  );
};

export default Patrocinadores;

// const container={
//     position: 'relative',
//     zIndex: 99999,
//     width: '100%',
//     display :'flex',
//     backgroundColor: 'white',
// }
