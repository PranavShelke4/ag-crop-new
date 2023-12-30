import React from "react";
import "../../../Style/Services/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Willoheader">
      <h1 className="header-title">
      Authorized Channel <br /> Partner for <span>wilo</span>    
      </h1>
      <button className="header-button">
        <Link className="know_more_btn">Know More</Link>
      </button>
    </div>
  );
}

export default Header;
