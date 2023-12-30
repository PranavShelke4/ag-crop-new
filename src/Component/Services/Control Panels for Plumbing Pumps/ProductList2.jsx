import React from 'react'
import "../../../Style/Services/Products.css"
import VariableSpeedCP from "../../../Assets/Products/Speed control panel.svg";
import MultipumpPressure from "../../../Assets/Products/Multi-pump Pressure.svg";
import WaterPressure from "../../../Assets/Products/Water Pressure Boosting.svg";



function ProductList2() {
    const products = [
        {
          Productname: "Variable Speed control panel",
          img: VariableSpeedCP,
        },
        {
          Productname: "Multi-Pump Pressure Boosting control panel",
          img: MultipumpPressure,
        },
        {
          Productname: "Water Pressure Boosting control panel for submersible pump system",
          img: WaterPressure,
        }
      ];
    
      return (
        <div className="CPP-Products">
          <div className="products-list">
            {products.map((product, index) => (
              <div key={index} className="CPP-product-card">
                <img className="CPP-product-img" alt="img" src={product.img} />
                <h6>{product.Productname}</h6>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ProductList2