import React from "react";
import "../../../Style/Services/ServicesInfo.css";
import HYDROPNEUMATIC_BOOSTER from "../../../Assets/HYDROPNEUMATIC_BOOSTER.webp";

function ServicesInfo() {
  return (
    <>
      <div className="ServicesInfo" id="ServicesInfo-boxs">
        <div className="ServicesInfo-box1">
          <h3>
            HYDROPNEUMATIC BOOSTER <br />
            PUMP SYSTEM
          </h3>
          <p>
            Our smart pressure-boosting Hydro-Pneumatic (HYPN) system is capable
            of changing the flow depending on the demand and situation. Changing
            water requirements with constant pressure is what our system is
            built for. Our HYPN system focuses on Low maintenance, Durable
            product, and Easy to install. The HYPN system helps to significantly
            control and change the supply capacity of water depending on the
            pressure requirements. Our HYPN system has also been coupled with
            allowing customers to remotely monitor the status of their system.
            AG Corporation has successfully integrated its pressure boosting and
            controlling technology with a wide range of OEM pumps, making it the
            best fit for a wide range of construction applications like Water
            boosting in Residential buildings, Hotels, Airports, and IT Parks
          </p>
        </div>
        <div className="ServicesInfo-box2">
          <img
            className="ServicesInfo-box2-img"
            id="ServicesInfo-box2-img"
            alt="img"
            src={HYDROPNEUMATIC_BOOSTER}
          />
        </div>

        <hr />
      </div>
    </>
  );
}

export default ServicesInfo;
