import React from 'react'
import "../../../Style/Services/Products.css"
import FixedSpeedcontrolpanel from "../../../Assets/Products/Fixed Speed control panel.svg";
import MultipumpPressure from "../../../Assets/Products/Multi-pump Pressure.svg";
import Dewatering from "../../../Assets/Products/Dewatering Pump System.svg";


function ProductList1() {
    const products = [
        {
          Productname: "Fixed Speed control panel",
          img: FixedSpeedcontrolpanel,
        },
        {
          Productname: "Multi-pump Pressure Boosting control panel",
          img: MultipumpPressure,
        },
        {
          Productname: "Dewatering Pump System Control Panel",
          img: Dewatering,
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

export default ProductList1