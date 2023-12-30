import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="ESheader">
      <h1 className="header-title">
        WE WORK THE WAY THAT <br /> WORKS FOR <br /> #your INDUSTRY
      </h1>
      <button className="header-button">
        <HashLink to={"#wide-range"} className="know_more_btn">Know More</HashLink>
      </button>
    </div>
  );
}

export default Header;
