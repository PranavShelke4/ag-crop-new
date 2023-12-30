import React from "react";
import "../../../Style/Services/WideRange.css";

function WideRange() {
  return (
    <div className="WideRange" id="wide-range">
      <h2>
        Wide range of Control Panels
      </h2>
      <div className="WideRange-boxs">
        <div className="WideRange-box-1">
          <span>​Detailed inspections, non-destructive testing and precision dimensioning</span>
          <span>On-site refurbishment and retrofitting</span>
          <span>Pumps Services and AMCs</span>
          <span>Electrical licensing</span>
        </div>
        <div className="WideRange-box-2">
          <span>Condition monitoring and reliability services</span>
          <span>Electrical contracting</span>
          <span>Electrical Services and AMCs</span>
          <span>Electrical Panel Maintenance</span>
        </div>
      </div>
    </div>
  );
}

export default WideRange;
