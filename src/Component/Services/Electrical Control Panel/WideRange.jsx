import React from "react";
import "../../../Style/Services/WideRange.css";

function WideRange() {
  return (
    <div className="WideRange">
      <h2>
        Wide range of Control Panels
      </h2>
      <div className="WideRange-boxs">
        <div className="WideRange-box-1">
          <span>Distribution and DG Panel</span>
          <span>Metering Panel</span>
          <span>APFC Panel</span>
        </div>
        <div className="WideRange-box-2">
          <span>Starter Panel</span>
          <span>Feeder Panel</span>
          <span>Fire Panel</span>
        </div>
      </div>
    </div>
  );
}

export default WideRange;
