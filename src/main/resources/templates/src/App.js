import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import StoryBoards from "./components/StoryBoard";
import Aboutus from "./components/Aboutus";
import Reports from "./components/Reports";
import Login from "./components/LogIn";
import Forgotpassword from "./components/Forgotpassword";
import UsersData from "./components/UsersData";
import Register from "./components/Register";
import Attributes from "./components/Attributes";
import { Redirect } from "react-router-dom";
import WorldMap from "./components/Worldmap";
import UsMap from "./components/Usmap";
import Error from "./components/Error";
import Livechart from "./components/Livechart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
require("bootstrap/dist/css/bootstrap.css");
const handleLogout = (props) => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("isAuthenticated");
  return <Redirect to="/login" />;
};
function App() {
  let auth = sessionStorage.getItem("isAuthenticated");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (auth ? <Home /> : <Redirect to="/error" />)}
          />
          <Route
            exact
            path="/analytics"
            render={() => (auth ? <Home /> : <Redirect to="/error" />)}
          />
          <Route exact path="/logout" component={handleLogout} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
          <Route exact path="/usmap" component={UsMap} />
          <Route exact path="/worldmap" component={WorldMap} />
          <Route exact path="/" component={Login} />

          <Route exact path="/error" component={Error} />
          <Route
            exact
            path="/usersdata"
            render={() => (auth ? <UsersData /> : <Redirect to="/error" />)}
          />
          <Route
            exact
            path="/visualization"
            render={() => (auth ? <Attributes /> : <Redirect to="/error" />)}
          />
          <Route
            exact
            path="/analytics/storyboards"
            render={() => (auth ? <StoryBoards /> : <Redirect to="/error" />)}
          />
        </Switch>
      </div>
    </Router>
  );
}
//https://bezkoder.com/spring-boot-react-jwt-auth/
export default App;
