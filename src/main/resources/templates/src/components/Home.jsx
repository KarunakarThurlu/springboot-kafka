import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="homenav navbar navbar-expand-sm navbar-light justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usersdata">
            UsersData
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/visualization">
            Visualization
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            DashBoard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
