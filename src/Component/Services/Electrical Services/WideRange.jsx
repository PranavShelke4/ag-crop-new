import React from "react";
import "../../../Style/Services/WideRange.css";

function WideRange() {
  return (
    <div className="WideRange" id="wide-range">
      <h2>
      Electrical Contracting Services
      </h2>
      <div className="WideRange-boxs">
        <div className="WideRange-box-1">
          <span>Low voltage Distribution</span>
          <span>Interior Lightings</span>
          <span>Transformer Service and maintenance</span>
          <span>HT Panel</span>
        </div>
        <div className="WideRange-box-2">
          <span>Emergency power systems</span>
          <span>Lighting control systems</span>
          <span>Medium voltage substation upto 33KV</span>
          <span>Protection</span>
        </div>
      </div>
    </div>
  );
}

export default WideRange;
