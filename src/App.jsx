/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import { Madridistas, Tickets, Hospitality, Tour, Shop, RMPlay } from "./pages/NavPages";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/madridistas" element={<Madridistas/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/hospitality" element={<Hospitality/>} />
          <Route path="/tour" element={<Tour/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/rmplay" element={<RMPlay/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
