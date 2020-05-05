import React from "react";

function LogIn() {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h3 align="center">Login Page</h3>
      <div className="container" style={{ paddingTop: "15px" }}>
        <input
          type="email"
          className="login"
          placeholder="useremail"
          id="useremail"
        ></input>
        <div class="errmsg"></div>

        <input
          type="password"
          className="login"
          placeholder="userpassword"
          id="userpassword"
        ></input>
        <div class="errmsg"></div>

        <input
          type="button"
          className="loginaplly"
          id="submit"
          value="Login"
        ></input>
      </div>
    </div>
  );
}

export default LogIn;
