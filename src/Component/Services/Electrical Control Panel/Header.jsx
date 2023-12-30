import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="ECPheader">
      <h1 className="header-title">LEADING PANEL <br /> MANUFACTURER</h1>
      <button className="header-button"><HashLink to={"#services-info"} className="know_more_btn">Know More</HashLink></button>
    </div>
  );
}

export default Header;
