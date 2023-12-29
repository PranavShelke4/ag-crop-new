import React from "react";
import Header from "../Component/Services/Electrical Control Panel/Header";
import WeHelpYou from "../Component/Services/Electrical Control Panel/WeHelpYou";
import ServicesInfo from "../Component/Services/Electrical Control Panel/ServicesInfo";
import WideRange from "../Component/Services/Electrical Control Panel/WideRange";
import QuickContact from "../Component/Services/QuickContact"

function ElectricalControlPanel() {
  return (
    <>
      <Header />
      <WeHelpYou />
      <ServicesInfo />
      <WideRange />
      <QuickContact />
    </>
  );
}

export default ElectricalControlPanel;
