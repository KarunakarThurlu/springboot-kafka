import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="app">
      <Navbar className="navbar-expand-sm bg-dark navbar-dark stickey">
        <Nav.Item className="col-1">
          <Link to="/home" className="navfont">
            <FontAwesomeIcon
              icon={faAlignJustify}
              style={{ fontSize: "30px" }}
            />
          </Link>
        </Nav.Item>
        <Nav.Item className="col-10">
          <Link to="/analytics" className="navfont">
            <i
              className="fa fa-cubes"
              aria-hidden="true"
              style={{ fontSize: "30px" }}
            ></i>
            DataAnalyticsApplication
          </Link>
        </Nav.Item>
        <Nav.Item className="col">
          <Link to="/logout" className="navfont">
            Logout
          </Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Header;
