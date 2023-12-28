import React from "react";
import "../../../Style/Services/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ESheader">
      <h1 className="header-title">
        WE WORK THE WAY THAT <br /> WORKS FOR <br /> #your INDUSTRY
      </h1>
      <button className="header-button">
        <Link className="know_more_btn">Know More</Link>
      </button>
    </div>
  );
}

export default Header;
