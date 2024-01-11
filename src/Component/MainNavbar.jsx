import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Assets/logo.webp";

function MainNavbar() {
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPos > currentScrollPos || currentScrollPos < 300;
      setShowNav(visible);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <Navbar expand="lg" style={{ display: showNav ? "block" : "none" }}>
      <Container>
        <Navbar.Brand to={"/"}>
          {" "}
          <img
            alt="AG"
            src={logo}
            width="50"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-right-side">
            <NavLink className="nav-links" to={"/"}>
              Home
            </NavLink>
            <NavDropdown title="Pumping Solutions" id="basic-nav-dropdown">
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
            <NavLink className="nav-links" to={"/electrical-control-panel"}>
              Electrical Control Panel
            </NavLink>
            <NavLink className="nav-links" to={"/fire-fighting-services"}>
              Fire Fighting Services
            </NavLink>
            <NavLink className="nav-links" to={"/electrical-services"}>
              Electrical Services
            </NavLink>
            <NavLink className="nav-links" to={"/after-sales-services"}>
              After Sales Services
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
