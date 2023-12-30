import React from "react";
import { NavLink } from "react-router-dom";
import "../../Style/Services/QuickContact.css";

function QuickContact() {
  return (
    <div className="QuickContact">
      <h3>
        Talk with our System Experts to know more about your best-fit solution
      </h3>
      <div className="QuickContact-btn-box">
        <button className="QuickContact-btn">
          <NavLink className="QuickContact-btn-link" to={"/contact-us"}>
            ENQUIRE NOW
          </NavLink>
        </button>
        <div className="QuickContact-btn-2">
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
  );
}

export default QuickContact;
