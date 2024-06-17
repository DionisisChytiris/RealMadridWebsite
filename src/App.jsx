/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import {
  Madridistas,
  Tickets,
  Hospitality,
  Tour,
  Shop,
  RMPlay,
  Patrocinadores
} from "./pages/NavPages";
import {
  Post1,
  Post10,
  Post11,
  Post12,
  Post13,
  Post14,
  Post15,
  Post16,
  Post17,
  Post18,
  Post19,
  Post2,
  Post20,
  Post21,
  Post22,
  Post23,
  Post24,
  Post25,
  Post26,
  Post27,
  Post28,
  Post29,
  Post3,
  Post30,
  Post31,
  Post32,
  Post33,
  Post34,
  Post35,
  Post36,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
} from "./pages/PostNewsPages";
import SignIn from "./components/SignIn/SignIn";
import MockNotice from "./MockNotice";
import { Academy, BasketFirstTeam, BernabeuStadium, Contact, FanClubs, FirstTeam, FoundationRM, History, Honors, News, RealMadridCity, RMGraduateSchool, RMNext, RMTVlive, Schedule, TheClub, Transparency, Values, WiZinkCenter, WomensTeam } from "./pages/Footer/MainFooterPages";
import { Abbott, Adobe, Bantrab, BMW, Canon, Cantabria, CocaCola, Daktronics, Dubai, EASports, EasyMarkets, Hth, Mahou, Nivea, Palladium, Sanitas, Softtek, Solan, Unicaja, Zegna } from "./pages/Footer/Sponsors";
import Cisco from "./pages/Footer/Sponsors/Cisco";
import PlayStaion from "./pages/Footer/Sponsors/PlayStaion";

function App() {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
      {showLogin ? <SignIn setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        {/* <MockNotice /> */}
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/madridistas" element={<Madridistas />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/rmplay" element={<RMPlay />} />
          <Route path="/patrocinadores" element={<Patrocinadores/>}/>
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
          <Route path="/post4" element={<Post4 />} />
          <Route path="/post5" element={<Post5 />} />
          <Route path="/post6" element={<Post6 />} />
          <Route path="/post7" element={<Post7 />} />
          <Route path="/post8" element={<Post8 />} />
          <Route path="/post9" element={<Post9 />} />
          <Route path="/post10" element={<Post10 />} />
          <Route path="/post11" element={<Post11 />} />
          <Route path="/post12" element={<Post12 />} />
          <Route path="/post13" element={<Post13 />} />
          <Route path="/post14" element={<Post14 />} />
          <Route path="/post15" element={<Post15 />} />
          <Route path="/post16" element={<Post16 />} />
          <Route path="/post17" element={<Post17 />} />
          <Route path="/post18" element={<Post18 />} />
          <Route path="/post19" element={<Post19 />} />
          <Route path="/post20" element={<Post20 />} />
          <Route path="/post21" element={<Post21 />} />
          <Route path="/post22" element={<Post22 />} />
          <Route path="/post23" element={<Post23 />} />
          <Route path="/post24" element={<Post24 />} />
          <Route path="/post25" element={<Post25 />} />
          <Route path="/post26" element={<Post26 />} />
          <Route path="/post27" element={<Post27 />} />
          <Route path="/post28" element={<Post28 />} />
          <Route path="/post29" element={<Post29 />} />
          <Route path="/post30" element={<Post30 />} />
          <Route path="/post31" element={<Post31 />} />
          <Route path="/post32" element={<Post32 />} />
          <Route path="/post33" element={<Post33 />} />
          <Route path="/post34" element={<Post34 />} />
          <Route path="/post35" element={<Post35 />} />
          <Route path="/post36" element={<Post36 />} />
          <Route path='/firstteam1' element={<FirstTeam/>}/>
          <Route path='/firstteam' element={<FirstTeam/>}/>
          <Route path='/academy' element={<Academy/>}/>
          <Route path='/basketfirstteam1' element={<BasketFirstTeam/>}/>
          <Route path='/basketfirstteam' element={<BasketFirstTeam/>}/>
          <Route path='/womensteam' element={<WomensTeam/>}/>
          <Route path='/theclub' element={<TheClub/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/transparency" element={<Transparency/>}/>
          <Route path="/values" element={<Values/>}/>
          <Route path="/honors" element={<Honors/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/fanclubs" element={<FanClubs/>}/>
          <Route path="/bernabeustadium1" element={<BernabeuStadium/>}/>
          <Route path="/bernabeustadium" element={<BernabeuStadium/>}/>
          <Route path="/realmadridcity" element={<RealMadridCity/>}/>
          <Route path="/wizinkcenter" element={<WiZinkCenter/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/rmtvlive" element={<RMTVlive/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/foundationrm" element={<FoundationRM/>}/>
          <Route path="/rmnext" element={<RMNext/>}/>
          <Route path="/rmgraduateschool" element={<RMGraduateSchool/>}/>
          <Route path="/mahou" element={<Mahou/>}/>
          <Route path="/dubai" element={<Dubai/>}/>
          <Route path="/bmw" element={<BMW/>}/>
          <Route path="/easports" element={<EASports/>}/>
          <Route path="/abbott" element={<Abbott/>}/>
          <Route path="/nivea" element={<Nivea/>}/>
          <Route path="/cantabria" element={<Cantabria/>}/>
          <Route path="/easymarkets" element={<EasyMarkets/>}/>
          <Route path="/adobe" element={<Adobe/>}/>
          <Route path="/zegna" element={<Zegna/>}/>
          <Route path="/cisco" element={<Cisco/>}/>
          <Route path="/palladium" element={<Palladium/>}/>
          <Route path="/daktronics" element={<Daktronics/>}/>
          <Route path="/softtek" element={<Softtek/>}/>
          <Route path="/canon" element={<Canon/>}/>
          <Route path="/unicaja" element={<Unicaja/>}/>
          <Route path="/playstation" element={<PlayStaion/>}/>
          <Route path="/sanitas" element={<Sanitas/>}/>
          <Route path="/cocacola" element={<CocaCola/>}/>
          <Route path="/solan" element={<Solan/>}/>
          <Route path="/hth" element={<Hth/>}/>
          <Route path="/bantrab" element={<Bantrab/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
