import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <nav className="homenav navbar navbar-expand-sm navbar-light justify-content-center stickey">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/reports">
              Reports
            </Link>
          </li>
          {/* <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usersdata">
            UsersData
          </Link>
        </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/visualization">
              Visualization
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/usersdata">
              Usersdata
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/analytics/storyboards">
              StoryBoards
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/usmap">
              UsMap
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/worldmap">
              WorldMap
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/livechart">
              LiveChart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
