import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="Willoheader">
      <h1 className="header-title">
        Authorized Channel <br /> Partner for <span>wilo</span>
      </h1>

      <div className="willo-header-button">
        <button className="header-button">
          <HashLink to={"/contact-us"} className="know_more_btn">
            ENQUIRE NOW
          </HashLink>
        </button>
        <button className="header-button">
          <HashLink to={"#products"} className="know_more_btn">
            LEARN MORE
          </HashLink>
        </button>
      </div>
    </div>
  );
}

export default Header;
