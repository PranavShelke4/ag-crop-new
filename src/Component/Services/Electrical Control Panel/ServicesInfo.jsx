import React from "react";
import { NavLink } from "react-router-dom";
import "../../../Style/Services/ServicesInfo.css";
import ELECTRICAL_CONTROL_PANELS from "../../../Assets/ELECTRICAL_CONTROL_PANELS.webp";

function ServicesInfo() {
  return (
    <div className="ServicesInfo">
      <div className="ServicesInfo-box1">
        <h3>
          Electrical Control Panel <br /> Manufacturing
        </h3>
        <p>
          Today’s facilities demand a reliable supply of power. AG Corporation
          offers a wide array of solutions to meet the most challenging power
          distribution requirements. Using an integrated approach that includes
          understanding customer requirements, design, manufacture, and On–Site
          support. We deliver results that contribute to our customer’s success.
          And our reputation for excellence can be seen in everything that we
          do. Our extensive customer experience is a key element to the
          solutions and services that we provide. AG Corporation takes a
          customer-centric approach to identify the solutions that contribute to
          the customer’s profitability and success.
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
        <img
          className="ServicesInfo-box2-img"
          alt="img"
          src={ELECTRICAL_CONTROL_PANELS}
        />
      </div>
    </div>
  );
}

export default ServicesInfo;
