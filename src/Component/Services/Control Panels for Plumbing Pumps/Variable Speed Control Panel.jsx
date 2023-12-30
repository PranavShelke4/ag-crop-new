import React from "react";
import "../../../Style/Services/ServicesInfo.css";
import { NavLink } from "react-router-dom";

function Variable_Speed_Control_Panel() {
  return (
    <div className="ServicesInfo" id="ServicesInfo-boxs">
      <div className="ServicesInfo-box1">
        <h3>Variable Speed Control Panel</h3>
        <p>
          Introducing our specially designed variable pump set for delivering
          constant pressure at variable water flow requirements. The fully
          protective and safest system allows users to use water at varying flow
          rates but with constant pressure maintenance.
        </p>

        <div className="products-services-btn-box">
          <button className="products-services-btn">
            <NavLink className="products-services-btn-link" to={"/contact-us"}>
              Enquire Now
            </NavLink>
          </button>
          <div className="products-services-btn-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>

          <button
            className="products-services-btn"
            style={{ marginLeft: "4%" }}
          >
            <NavLink className="products-services-btn-link" to={"/contact-us"}>
              Catalogue
            </NavLink>
          </button>
          <div className="products-services-btn-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ServicesInfo-box2">
        <h4>Specification:</h4>
        <ul>
          <li>Control Unit:- PLC + VFD</li>
          <li>Display: - HMI/ LED</li>
          <li>Pump Integration: - 2/3 pumps</li>
          <li>Pump ratings: - 0.75KW to 7.5 KW</li>
          <li>Pump types: - Horizontal/Vertical/Submersible</li>
          <li>Customization: - More than 3 pumps More than 7.5KW pumps</li>
          <li>Pumping technology:- Cascading technology</li>
          <li>Sensors: - Float sensor, optical sensor</li>
          <li>Extra Features: - BMS contacts + RS485 port</li>
          <li>Application: - Upward/Downward pressure boosting, Tap feeding, Water supply for residential/hotels/commercial buildings/Industrial applications</li>
        </ul>
      </div>
    </div>
  );
}

export default Variable_Speed_Control_Panel;
