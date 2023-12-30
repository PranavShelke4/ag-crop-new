import React from "react";
import "../../../Style/Services/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="CPPheader">
      <h1 className="header-title">
      PERCEPTION ENABLED <br /> TECHNOLOGY
      </h1>
      <button className="header-button">
        <Link className="know_more_btn">Know More</Link>
      </button>
    </div>
  );
}

export default Header;
