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
      </div>
    </div>
  );
}

export default QuickContact;
