import React from "react";
import { NavLink } from "react-router-dom";
import "../../Style/Home/ProductsServices.css";
import Building_Construction_Solutions from "../../Assets/Building_Construction.webp";
import ELECTRICAL_CONTROL_PANELS from "../../Assets/ELECTRICAL_CONTROL_PANELS.webp";
import FIRE_FIGHTING_SYSTEMS from "../../Assets/FIRE_FIGHTING_SYSTEMS.webp";
import ELECTRICAL_SERVICES from "../../Assets/ELECTRICAL_SERVICES.webp";

function ProductsServices() {
  return (
    <div className="products-services">
      <div className="products-services-title">
        <p>HOW WE CAN HELP YOU </p>
        <br />
        <h4>Delivering Exceptional</h4>
        <h4>Products and Services</h4>
        <h4>Around the World</h4>
      </div>

      {/* BUILDING & CONSTRUCTION SOLUTIONS */}
      <div className="products-services-boxs">
        <div className="products-services-box1">
          <span className="products-services-box1-title">
            BUILDING & CONSTRUCTION SOLUTIONS
          </span>
          <h5> Water management | HYPN system | Fire fighting system</h5>
          <p className="products-services-box1-p">
            Blending our 15 years of experience and the latest technology to the
            commercial and residential building's water management, mechanical
            and Electrical requirements. We are experienced in watering &
            dewatering for multiple story, water pressure management, fire
            fighting & LT Panels
          </p>

          <div className="products-services-btn-box">
            <button className="products-services-btn">
              <NavLink
                className="products-services-btn-link"
                to={"/contact-us"}
              >
                Read More
              </NavLink>
            </button>
            <div className="products-services-btn-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="products-services-box2">
          <img alt="img" src={Building_Construction_Solutions} />
        </div>
      </div>

      {/* ELECTRICAL CONTROL PANELS */}
      <div className="products-services-boxs">
        <div className="products-services-box2">
          <img
            className="products-services-box2-img"
            alt="img"
            src={ELECTRICAL_CONTROL_PANELS}
          />
        </div>

        <div className="products-services-box1">
          <span className="products-services-box1-title">
            ELECTRICAL CONTROL PANELS
          </span>
          <h5>
            LT-HT Panels | Starter panel | Distribution & DG Panel | APFC Panel
            | Feeder Panel | Fire fighting panel | MCC Panel
          </h5>
          <p className="products-services-box1-p">
            AG Corporation offers a wide array of solutions to meet the most
            challenging power distribution requirements. Using an integrated
            approach that includes understanding customer requirements, design,
            manufacture, and On–Site support.
          </p>

          <div className="products-services-btn-box">
            <button className="products-services-btn">
              <NavLink
                className="products-services-btn-link"
                to={"/contact-us"}
              >
                Read More
              </NavLink>
            </button>
            <div className="products-services-btn-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FIRE-FIGHTING SYSTEMS */}
      <div className="products-services-boxs">
        <div className="products-services-box1">
          <span className="products-services-box1-title">
            FIRE-FIGHTING SYSTEMS
          </span>
          {/* <h5> Water management | HYPN system | Fire fighting system</h5> */}
          <p className="products-services-box1-p">
            We provide <span>high-quality end-to-end firefighting solutions.</span> We are
            the Licensed fire fighting contractor of the Maharashtra fire
            authority. When it comes to fire safety, there must be a high
            quality and assured end-to-end fire fighting solution & that's the
            reason why AG Corporation provides 100% verified and high-quality
            fire fighting control panels and the best fit for different HPs of
            requirements.
          </p>

          <div className="products-services-btn-box">
            <button className="products-services-btn">
              <NavLink
                className="products-services-btn-link"
                to={"/contact-us"}
              >
                Read More
              </NavLink>
            </button>
            <div className="products-services-btn-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="products-services-box2">
          <img alt="img" src={FIRE_FIGHTING_SYSTEMS} />
        </div>
      </div>

      {/* ELECTRICAL SERVICES */}
      <div className="products-services-boxs">
        <div className="products-services-box2">
          <img
            className="products-services-box2-img"
            alt="img"
            src={ELECTRICAL_SERVICES}
          />
        </div>

        <div className="products-services-box1">
          <span className="products-services-box1-title">
            ELECTRICAL SERVICES
          </span>
          <h5>
            Electrical contracting | Control Panel Mfg. | Commissioning | PAN
            India service
          </h5>
          <p className="products-services-box1-p">
            Electrical contracting some of which are low voltage distribution,
            emergency power systems, interior lighting, lighting control systems
            etc. An electrical contracting is a business that performs
            specialized construction work related to the design, installation,
            and maintenance of electrical systems
          </p>

          <div className="products-services-btn-box">
            <button className="products-services-btn">
              <NavLink
                className="products-services-btn-link"
                to={"/contact-us"}
              >
                Read More
              </NavLink>
            </button>
            <div className="products-services-btn-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsServices;
