import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="Willoheader">
      <h1 className="header-title">
      Authorized Channel <br /> Partner for <span>wilo</span>    
      </h1>
      <button className="header-button">
        <HashLink to={"#products"} className="know_more_btn">Know More</HashLink >
      </button>
    </div>
  );
}

export default Header;
