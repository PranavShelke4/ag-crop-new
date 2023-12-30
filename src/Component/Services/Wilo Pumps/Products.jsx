import React from "react";
import { NavLink } from "react-router-dom";
import "../../../Style/Services/Products.css";
import dewatering from "../../../Assets/Products/Dewatering Submersible Pumps.svg";
import diesel from "../../../Assets/Products/Diesel Engine Driven.svg";
import electrical from "../../../Assets/Products/Electrical fire hydrant.svg";
import jockey from "../../../Assets/Products/Jockey Pump.svg";
import multi from "../../../Assets/Products/Multi Stage Multi Outlet.svg";
import multiPump from "../../../Assets/Products/Multi-Pump Hydropneumatic.svg";
import sewage from "../../../Assets/Products/Sewage Cutter Pump.svg";
import variable from "../../../Assets/Products/Variable Speed control panel.svg";

function Products() {
  const products = [
    {
      Productname: "Sewage Cutter Pump",
      img: sewage,
    },
    {
      Productname: "Dewatering Submersible Pumps",
      img: dewatering,
    },
    {
      Productname: "Multi-Pump Hydropneumatic Presure Booster System",
      img: multiPump,
    },
    {
      Productname: "Single Pump Booster System",
      img: variable,
    },
    {
      Productname: "Diesel Engine Driven Fire Pump",
      img: diesel,
      class: "diesel",
    },
    {
      Productname: "Electrical fire hydrant and Sprinkler Pump",
      img: electrical,
      class: "electrical",
    },
    {
      Productname: "Jockey Pump",
      img: jockey,
      class: "jockey",
    },
    {
      Productname: "Multi Stage Multi Outlet Fire Pump",
      img: multi,
      class: "multi",
    },
  ];

  return (
    <div className="products">
      <h2>CHOOSE FROM OUR WIDE RANGE OF WILO PRODUCTS</h2>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img id="product-img" className={product.class} alt="img" src={product.img} />
            <h6>{product.Productname}</h6>
            <button className="product-button">
              <NavLink className="product-btn-link" to={"/contact-us"}>
                Know More
              </NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
