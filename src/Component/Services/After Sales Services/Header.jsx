import React from "react";
import "../../../Style/Services/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ASSheader">
      <h1 className="header-title">24*7 PROMPT <br />AFTER SALES SERVICES</h1>
      <button className="header-button"><Link className="know_more_btn">Know More</Link></button>
    </div>
  );
}

export default Header;
