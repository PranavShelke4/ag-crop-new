import React from "react";
import "../../../Style/Services/Header.css";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="CPPheader">
      <h1 className="header-title">
      PERCEPTION ENABLED <br /> TECHNOLOGY
      </h1>
      <button className="header-button">
        <HashLink to={"#ServicesInfo-boxs"}  className="know_more_btn">Know More</HashLink>
      </button>
    </div>
  );
}

export default Header;
