import React, { Component } from "react";
import axios from "axios";
import apiconfig from "../apiconfig/config";
import { Link } from "react-router-dom";
import "../App.css";
export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { userEmail: "", userPwd: "" },
      errors: {},
      response: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let errors = {};
    if (this.validateForm()) {
      axios
        .post(`${apiconfig.baseUrl}login`, this.state.fields)
        .then((res) => {
          if (res.data.message === "Bad credentials") {
            errors["response"] = "Invalid UserName Or Password";
            this.setState({ errors: errors });
            return false;
          } else {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("isAuthenticated", true);
            this.props.history.push("/home");
          }
          console.log(res.data);
        })
        .catch((e) => console.log("error"));
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let isvalid = true;
    if (!fields["userEmail"]) {
      isvalid = false;
      errors["userEmail"] = "Plaese enter email";
    }
    if (typeof fields["userEmail"] !== undefined) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["userEmail"]) && fields["userEmail"] !== "") {
        isvalid = false;
        errors["userEmail"] = "please enter currect mailid";
      }
    }
    if (!fields["userPwd"]) {
      isvalid = false;
      errors["userPwd"] = "Please enter Password";
    }
    this.setState({ errors: errors });
    return isvalid;
  }
  render() {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <h3 align="center">Signin</h3>
        <div className="logincontainer" style={{ paddingTop: "15px" }}>
          <form>
            <input
              type="email"
              name="userEmail"
              className="login"
              value={this.state.fields.email}
              placeholder="useremail"
              onChange={this.handleChange}
              id="useremail"
            ></input>
            <div className="errmsg">{this.state.errors.userEmail}</div>

            <input
              type="password"
              name="userPwd"
              className="login"
              value={this.state.fields.password}
              placeholder="userpassword"
              onChange={this.handleChange}
              id="userpassword"
            ></input>
            <div className="errmsg">{this.state.errors.userPwd}</div>

            <input
              type="button"
              className="loginaplly"
              name="response"
              id="submit"
              value="Signin"
              onClick={this.handleSubmit}
            ></input>
            <div className="errmsg">{this.state.errors.response}</div>
            <Link className="forgotpasswordlink" to="/forgotpassword">
              Forgot password?
            </Link>
            <Link className="signuplink" to="/register">
              Signup
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
