import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="ASSheader">
      <h1 className="header-title">24*7 PROMPT <br />AFTER SALES SERVICES</h1>
      <button className="header-button"><HashLink to={"#wide-range"} className="know_more_btn">Know More</HashLink ></button>
    </div>
  );
}

export default Header;
