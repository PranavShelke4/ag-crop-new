import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import ContsetUS from "./Pages/Contact_Us";
import WiloPumps from "./Pages/WiloPumps";
import ElectricalControlPanel from "./Pages/ElectricalControlPanel";
import FireFighting from "./Pages/FireFightingServices";
import ElectricalServices from "./Pages/ElectricalServices";
import AfterSalesServices from "./Pages/AfterSalesServices";
import ControlPanelsForPlumbingSolutions from "./Pages/CPPPS";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContsetUS />} />
        <Route path="/wilo-pumps" element={<WiloPumps />} />
        <Route
          path="/electrical-control-panel"
          element={<ElectricalControlPanel />}
        />
        <Route path="/fire-fighting-services" element={<FireFighting />} />
        <Route path="/electrical-services" element={<ElectricalServices />} />
        <Route path="/after-sales-services" element={<AfterSalesServices />} />
        <Route
          path="/control-Panels-for-plumbing-solutions"
          element={<ControlPanelsForPlumbingSolutions />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
