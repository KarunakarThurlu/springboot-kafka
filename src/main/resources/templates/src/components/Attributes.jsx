import React from "react";
import { useState, useEffect } from "react";
import Visualization from "./Visualization";
import axios from "axios";
import Reports from "./Resports";
import "../App.css";
/*
axios.post(url, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
*/
function Attributes() {
  let [attr, setAttr] = useState([]);
  let [result, setResult] = useState({
    xaxis: "",
    yaxis: "",
    aggrigation: "",
    ranking: "",
    reporttype: "",
  });
  let [response, setResponse] = useState([]);
  console.log("intitial state " + attr);
  useEffect(() => {
    axios
      .get("http://localhost:2020/app/attributes")
      .then((res) => {
        setAttr(res.data);
        console.log(attr);
      })
      .catch(() => console.log("error"));
  }, []);
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(result);
    axios
      .post("http://localhost:2020/app/selectedAttributes", result)
      .then((res) => {
        setResponse(res.data);
        console.log(response);
      })
      .catch((res) => console.log("error"));
  };
  let res = response;

  console.log(res);
  let abc = attr.map((a) => (
    <option key={a} value={a}>
      {a}
    </option>
  ));
  let AttributesSelection = () => {
    return (
      <div className="App">
        <div>
          <form className="arrtform">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Xaxis</label>
              <select
                className="xaxis"
                className="form-control"
                onChange={(e) => (result.xaxis = e.target.value)}
              >
                <option>ChooseXaxis</option>
                {abc}
              </select>
            </div>
            <div className="form-group row ">
              <label className="col-sm-2 col-form-label"> Yaxis</label>
              <select
                className="yaxis"
                className="form-control"
                onChange={(e) => (result.yaxis = e.target.value)}
              >
                <option>ChooseYaxis</option>
                {abc}
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Aggrigation</label>
              <select
                className="yaxis"
                className="form-control"
                onChange={(e) => (result.aggrigation = e.target.value)}
              >
                <option>ChooseAggrication</option>
                <option>Sum</option>
                <option>Max</option>
                <option>Min</option>
                <option>Avg</option>
                <option>Count</option>
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Ranking</label>
              <select
                className="yaxis"
                className="form-control"
                onChange={(e) => (result.ranking = e.target.value)}
              >
                <option>ChooseRanking</option>
                <option>Top 20</option>
                <option>Bottom 20</option>
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Report Type</label>
              <select
                className="yaxis"
                className="form-control"
                onChange={(e) => (result.reporttype = e.target.value)}
              >
                <option>ChooseReportType</option>
                <option>StoryBoard</option>
                <option>Report</option>
              </select>
            </div>
            <div className="form-group row">
              <div class="col-sm-2 offset-sm-2">
                <button
                  className="attrapplybutton"
                  className="btn btn-primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  let storyBoard = () => {
    return (
      <div className="App">
        <Visualization value={res} />
      </div>
    );
  };
  let report = () => {
    return (
      <div className="App">
        <Reports value={res} />
      </div>
    );
  };
  let displaycontent =
    result.xaxis === "" && result.yaxis === ""
      ? AttributesSelection()
      : result.reporttype == "StoryBoard"
      ? storyBoard()
      : report();
  return <div className="App">{displaycontent}</div>;
}

export default Attributes;
