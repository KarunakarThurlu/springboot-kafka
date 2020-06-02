import React from "react";
import "./App.css";
import Header from "./components/Header";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import StoryBoards from "./components/StoryBoard";
import Aboutus from "./components/Aboutus";
import Reports from "./components/Resports";
import Login from "./components/LogIn";
import UsersData from "./components/UsersData";
import Attributes from "./components/Attributes";

import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
require("bootstrap/dist/css/bootstrap.css");

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/analytics" component={Home} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/usersdata" component={UsersData} />
          <Route exact path="/visualization" component={Attributes} />
          <Route exact path="/analytics/storyboards" component={StoryBoards} />
        </Switch>
      </div>
    </Router>
  );
}
//https://bezkoder.com/spring-boot-react-jwt-auth/
export default App;
