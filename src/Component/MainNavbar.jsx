import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Style/Navbar.css";
// import logo from "../Assets/img/logo.png";
import { HashLink as NavLink } from 'react-router-hash-link';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <NavLink to={"/"}>
        {/* <img
          alt="AG"
          src={logo}
          width="50"
          height="45"
          className="d-inline-block align-top"
        /> */}
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="me-auto nav-right-side">
          <NavLink className="nav-links" to="/">
            Home
          </NavLink>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown className="pumping-nav-dropdown" title="Pumping Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className="dropdown-item"
                  to={"/control-Panels-for-plumbing-solutions"}
                >
                  Control Panels for plumbing solutions
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="dropdown-item" to={"/wilo-pumps"}>
                  Wilo pumps
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to={"/electrical-control-panel"}>
              Electrical Control Panel
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to={"/fire-fighting-services"}>
                Fire Fighting Services
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to={"/electrical-services"}>
                Electrical Services
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to={"/after-sales-services"}>
                After Sales Services
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink className="nav-links" to="/contact-us">
            Contact
          </NavLink>
          <NavLink className="nav-links" to="/#about">
            About
          </NavLink>
          <NavLink to="/">
            <button className="nav-button">Enquire Now &rarr;</button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;