/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import { Madridistas, Tickets, Hospitality, Tour, Shop, RMPlay, SignIn } from "./pages/NavPages";
import { Post1, Post10, Post11, Post12, Post13, Post14, Post15, Post16, Post17, Post18, Post19, Post2, Post20, Post21, Post22, Post23, Post24, Post25, Post26, Post27, Post28, Post29, Post3, Post30, Post31, Post32, Post33, Post34, Post35, Post36, Post4, Post5, Post6, Post7, Post8, Post9 } from "./pages/PostNewsPages";


function App() {
  return (
    <>
      <div className="app">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path="/madridistas" element={<Madridistas/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/hospitality" element={<Hospitality/>} />
          <Route path="/tour" element={<Tour/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/rmplay" element={<RMPlay/>} />
          <Route path="/post1" element={<Post1/>} />
          <Route path="/post2" element={<Post2/>} />
          <Route path="/post3" element={<Post3/>} />
          <Route path="/post4" element={<Post4/>} />
          <Route path="/post5" element={<Post5/>} />
          <Route path="/post6" element={<Post6/>} />
          <Route path="/post7" element={<Post7/>} />
          <Route path="/post8" element={<Post8/>} />
          <Route path="/post9" element={<Post9/>} />
          <Route path="/post10" element={<Post10/>} />
          <Route path="/post11" element={<Post11/>} />
          <Route path="/post12" element={<Post12/>} />
          <Route path="/post13" element={<Post13/>} />
          <Route path="/post14" element={<Post14/>} />
          <Route path="/post15" element={<Post15/>} />
          <Route path="/post16" element={<Post16/>} />
          <Route path="/post17" element={<Post17/>} />
          <Route path="/post18" element={<Post18/>} />
          <Route path="/post19" element={<Post19/>} />
          <Route path="/post20" element={<Post20/>} />
          <Route path="/post21" element={<Post21/>} />
          <Route path="/post22" element={<Post22/>} />
          <Route path="/post23" element={<Post23/>} />
          <Route path="/post24" element={<Post24/>} />
          <Route path="/post25" element={<Post25/>} />
          <Route path="/post26" element={<Post26/>} />
          <Route path="/post27" element={<Post27/>} />
          <Route path="/post28" element={<Post28/>} />
          <Route path="/post29" element={<Post29/>} />
          <Route path="/post30" element={<Post30/>} />
          <Route path="/post31" element={<Post31/>} />
          <Route path="/post32" element={<Post32/>} />
          <Route path="/post33" element={<Post33/>} />
          <Route path="/post34" element={<Post34/>} />
          <Route path="/post35" element={<Post35/>} />
          <Route path="/post36" element={<Post36/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
