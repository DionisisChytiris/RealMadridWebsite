/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RealMadrid from "./pages/RealMadrid";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/real" element={<RealMadrid />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
