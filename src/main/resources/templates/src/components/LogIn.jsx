import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import App from "../App";
import history from "../history";
export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: { email: "", password: "" }, errors: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      redirectTo: "/home",
      fields,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      /* axios
      .post(`${apiConfig.baseUrl}viewstoryboard`, data)
      .then((res) => {
          (res.data);
      })
      .catch((e) => console.log("error"));*/
      let fields = {};
      fields["email"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      if (true) {
        if (this.props.history === undefined) {
          history.push("/home");
        } else {
          this.props.history.push("/hom");
        }
      }
      console.log(this.state.fields);
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let isvalid = true;
    if (!fields["email"]) {
      isvalid = false;
      errors["email"] = "Plaese enter email";
    }
    if (typeof fields["email"] !== undefined) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"]) && fields["email"] !== "") {
        isvalid = false;
        errors["email"] = "please enter currect mailid";
      }
    }
    if (!fields["password"]) {
      isvalid = false;
      errors["password"] = "Please enter Password";
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
              name="email"
              className="login"
              value={this.state.fields.email}
              placeholder="useremail"
              onChange={this.handleChange}
              id="useremail"
            ></input>
            <div className="errmsg">{this.state.errors.email}</div>

            <input
              type="password"
              name="password"
              className="login"
              value={this.state.fields.password}
              placeholder="userpassword"
              onChange={this.handleChange}
              id="userpassword"
            ></input>
            <div className="errmsg">{this.state.errors.password}</div>

            <input
              type="button"
              className="loginaplly"
              id="submit"
              value="Login"
              onClick={this.handleSubmit}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
