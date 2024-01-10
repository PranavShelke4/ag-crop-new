/* eslint-disable react/jsx-no-target-blank */
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
        <div className="footer-social-icons">
          <a
            href="https://www.linkedin.com/company/ag-corporation/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="filled" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="filled" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
        <p className="footer-para">No: - +91-9923208955 </p>
        <p className="footer-para">Email: sales@agcorporation.in</p>
        <p className="footer-para">
          Sai Mangal Apartment, Sector no: 04, plot no. <br /> 206, Lane no:01
          Spine road, Moshi, Pune - <br />
          412105, Maharashtra (India){" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
