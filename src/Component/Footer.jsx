import React from "react";
import "../Style/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div-1">
        <h1>Who we are</h1>
        <p>
          AG Corporation is serving the market proudly for the last 15 years. We
          are one of the prominent manufacturers and suppliers of a wide range
          of Hydropneumatic control panels, Fire fighting systems, and Electric
          control panels. AG Corporation is CPRI approved and manufactured in
          compliance with the industry-set norms and regulations. We have
          well-equipped and have large production and service capacity. We have
          been appreciated by many top organizations for the precise requirement
          of our customers in the most efficient manner
        </p>
      </div>
      <div className="footer-div-2">
        <button className="footer-button">
          <NavLink className="footer-link" to={"/contact-us"}>
            ENQUIRE NOW
          </NavLink>
        </button>
        <p className="footer-para">
          Our team will be happy to solve your query..
        </p>
        <p className="footer-para">No: - +91-9923208955 </p>
        <p className="footer-para">Email: sales@agcorporation.in</p>
        <p className="footer-para">
          Sai Mangal Apartment, Sector no: 04, plot no. 206, Lane no:01 Spine
          road, Moshi, Pune-412105, Maharashtra (India){" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
