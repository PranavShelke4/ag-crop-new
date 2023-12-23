import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;