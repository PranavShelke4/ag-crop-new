import React from "react";
import "../../Style/Home/OurClients.css";
import img1 from "../../Assets/client_logo/gera.webp";
import img2 from "../../Assets/client_logo/yashada.webp";
import img3 from "../../Assets/client_logo/belmac.webp";
import img4 from "../../Assets/client_logo/motiwala_square.webp";
import img5 from "../../Assets/client_logo/varroc.webp";
import img6 from "../../Assets/client_logo/avasara_academy.webp";
import img7 from "../../Assets/client_logo/motherson.webp";
import img8 from "../../Assets/client_logo/vilas_javdekar.webp";
import img9 from "../../Assets/client_logo/amanora.webp";

function OurClients() {
  return (
    <div className="OurClients">
      <div className="OurClientsBox1">
        <div className="OurClientsBox1SubBox">
          <div className="OurClientsBox1Title">
            <h1>
              Our Clients <br />
              who love us
            </h1>
          </div>
        </div>
        <div className="OurClientsBox1SubBox2">
          What do they love the most? <br /> <br />
          <ul>
            <li>Consultation for their every query</li>
            <li>Fast Delivery and 24*7 Support</li>
            <li>Supreme Quality of work</li>
            <li>New-age Technology and features</li>
          </ul>
        </div>
      </div>
      <div className="OurClientsBox2">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
        <img src={img8} alt="img8" />
        <img src={img9} alt="img9" />
      </div>
    </div>
  );
}

export default OurClients;
