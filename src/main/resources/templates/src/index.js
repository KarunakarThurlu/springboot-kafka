import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Routerapp from "./router";
import "./App.css";

let auth = sessionStorage.getItem("authenticated");
ReactDOM.render(<App />, document.getElementById("root"));
