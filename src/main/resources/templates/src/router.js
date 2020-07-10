import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Login from "./components/LogIn";

import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
require("bootstrap/dist/css/bootstrap.css");

function Routerapp() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Login />
        </Switch>
      </div>
    </Router>
  );
}
//https://bezkoder.com/spring-boot-react-jwt-auth/
export default Routerapp;
