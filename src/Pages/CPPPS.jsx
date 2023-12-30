/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Component/Services/Control Panels for Plumbing Pumps/Header";
import SecendSection from "../Component/Services/Control Panels for Plumbing Pumps/SecendSection";
import ServicesInfo from "../Component/Services/Control Panels for Plumbing Pumps/ServicesInfo";
import Fixed_Speed_control_panel from "../Component/Services/Control Panels for Plumbing Pumps/Fixed Speed control panel";
import Variable_Speed_Control_Panel from "../Component/Services/Control Panels for Plumbing Pumps/Variable Speed Control Panel";
import WideRange from "../Component/Services/Control Panels for Plumbing Pumps/WideRange";
import QuickContact from "../Component/Services/QuickContact";

function CPPPS() {
  return (
    <>
      <Header />
      <SecendSection />
      <ServicesInfo />
      <Fixed_Speed_control_panel />
      <Variable_Speed_Control_Panel />
      <WideRange />
      <QuickContact />
    </>
  );
}

export default CPPPS;
