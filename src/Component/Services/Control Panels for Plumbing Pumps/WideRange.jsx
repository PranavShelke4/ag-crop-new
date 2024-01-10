import React from "react";
import "../../../Style/Services/WideRange.css";

function WideRange() {
  return (
    <div className="WideRange">
      <h2>What Makes our HYPN system <br /> Control Panel different</h2>
      <div className="WideRange-boxs">
        <div className="WideRange-box-1">
          <span>Over voltage, Under voltage protection</span>
          <span>Over current, Under current (Dry-run) protection</span>
          <span>Frequency Protection circuit</span>
          <span>Wireless data collection and data communication</span>
          <span>Premium Quality and Durability assurance</span>
          <span>24*7 Strong After-sales support and services</span>
        </div>
        <div className="WideRange-box-2">
          <span>Reverse phase / Phase loss protection</span>
          <span>Dry Run Protection with float and Optical Sensor</span>
          <span>Scrolling Display / HMI integration</span>
          <span>Password Protected System for security purpose</span>
          <span>Customized Design and Development</span>
        </div>
      </div>
    </div>
  );
}

export default WideRange;
