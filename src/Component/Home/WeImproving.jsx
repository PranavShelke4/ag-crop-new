import React from "react";
import "../../Style/Home/WeImproving.css";
import clock from "../../Assets/clock.webp";

function WeImproving() {
  return (
    <div className="WeImproving">
      <div className="WeImprovingBox1">
        <div className="WeImprovingBox1SubBox">
          <div className="WeImprovingBox1SubBox2">
            <p>WHAT MATTERS TO US?</p>
            <div className="WeImprovingBox1SubBox2SubBox">
              <h2>We are Improving ourselves #EVERY SECOND </h2>
            </div>
            <span>
              At AG Corporation we keenly look into every aspect that affects
              our Customer's satisfaction, Employee engagement, our Enthusiastic
              work culture, and Product Quality.
            </span>
            <br />
            <br />
            <span>
              We believe in continuous improvement of the organization and
              that's the reason we are leading market from last 12 + years
            </span>
          </div>
        </div>
      </div>
      <div className="WeImprovingBox2">
        <img src={clock} alt="clock" />
      </div>
    </div>
  );
}

export default WeImproving;
