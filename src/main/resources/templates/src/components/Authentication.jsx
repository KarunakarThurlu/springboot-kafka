import React, { useState } from "react";
import Login from "./LogIn";
import App from "../App.js";

function Authentication() {
  let LogN = () => {
    return (
      <div className="App">
        <Login />
      </div>
    );
  };
  let home = () => {
    return (
      <div className="App">
        <App />
      </div>
    );
  };
  let displaycontent =
    sessionStorage.getItem("authenticated") === true ? home() : LogN();
  return <div className="App">{displaycontent}</div>;
}

export default Authentication;
