import React from "react";
import "../../../Style/Services/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="FFSheader">
      <h1 className="header-title">FIRE FIGHTING <br /> SYSTEM CONTRACT <br /> SERVICE</h1>
      <button className="header-button"><Link className="know_more_btn">Know More</Link></button>
    </div>
  );
}

export default Header;
