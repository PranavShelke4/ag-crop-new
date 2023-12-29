import React from "react";
import { NavLink } from "react-router-dom";
import "../../../Style/Services/ServicesInfo.css";
import ELECTRICAL_CONTROL_PANELS from "../../../Assets/ELECTRICAL_CONTROL_PANELS.webp";

function ServicesInfo() {
  return (
    <div className="ServicesInfo">
      <div className="ServicesInfo-box1">
        <h3>Fire Fighting System</h3>
        <p>
          Welcome to our firefighting contracting service! We are dedicated to
          providing top-quality fire protection services to our clients. Our
          purpose behind our Fire protection practice is based on; The
          continuity of operations, property protection, and last but not least
          life safety. Team AG intend in their engineering of fire protection
          systems to prevent the interruption of critical services necessary for
          the public welfare and to prevent area-wide conflagrations, all with
          life safety as the ultimate goal.<br /><br />  We offer a wide range of fire
          protection services, including fire system design, installation,
          inspection, and maintenance. Our services are tailored to meet the
          unique needs of each client, and we work closely with our clients to
          ensure that their fire protection systems are designed and installed
          to the highest standards.
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
        </div>
      </div>
      <div className="ServicesInfo-box2">
        <ul>
            <li>Sprinkler Systems</li>
            <li>Dry and Wet Risers</li>
            <li>Fire Pumps (NEPA and UNI)</li>
            <li>Fire Suppression Systems (CO2 – FM200 )</li>
            <li>Fire Detection & Alarm System</li>
            <li>Water Mist</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesInfo;
