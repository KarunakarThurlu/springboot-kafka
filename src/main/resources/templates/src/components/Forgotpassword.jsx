import React from "react";

import "../App.css";

import "../App.css";
function Forgotpassword() {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h3 align="center">PasswordReset</h3>
      <div className="logincontainer" style={{ paddingTop: "15px" }}>
        <form>
          <input
            type="email"
            name="userEmail"
            className="login"
            
            placeholder="enter email"
           
            id="useremail"
          ></input>
          <div className="errmsg">{}</div>

          <input
            type="button"
            className="loginaplly"
            name="response"
            id="submit"
            value="Submit"
            
          ></input>
          <div className="errmsg">{}</div>
        </form>
        
      </div>
    </div>
  );
}

export default Forgotpassword;
