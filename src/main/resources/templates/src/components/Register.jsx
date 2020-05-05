import React from "react";
import "../App.css";
function Register() {
  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <h3 align="center">Registration Page</h3>
      <div className="container" style={{ paddingTop: "15px" }}>
        <input
          type="text"
          className="register"
          placeholder="username"
          id="username"
        ></input>
        <div class="errmsg"></div>

        <input
          type="email"
          className="register"
          placeholder="useremail"
          id="useremail"
        ></input>
        <div class="errmsg"></div>

        <input
          type="text"
          className="register"
          placeholder="userphono"
          id="userphoneno"
        ></input>
        <div class="errmsg"></div>

        <input
          type="password"
          className="register"
          placeholder="userpassword"
          id="userpassword"
        ></input>
        <div class="errmsg"></div>

        <input
          type="button"
          className="signupapply"
          id="submit"
          value="Register"
        ></input>
      </div>
    </div>
  );
}

export default Register;
