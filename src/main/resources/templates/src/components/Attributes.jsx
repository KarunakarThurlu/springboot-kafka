import React from "react";
import { useState, useEffect } from "react";
import Visualization from "./Visualization";
import axios from "axios";
import "../App.css";

function Attributes() {
  let [attr, setAttr] = useState([]);
  let [result, setResult] = useState({
    xaxis: "",
    yaxis: "",
    aggrigation: "sum",
  });
  let [response, setResponse] = useState({});
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
  let abc = attr.map((a) => (
    <option key={a} value={a}>
      {a}
    </option>
  ));
  let AttributesSelection = () => {
    return (
      <div className="App">
        Choose Xaxis
        <select
          className="xaxis"
          style={{ margin: "20px" }}
          onChange={(e) => (result.xaxis = e.target.value)}
        >
          <option style={{ width: "20px" }}>Xaxis</option>
          {abc}
        </select>
        Choose yaxis
        <select
          className="yaxis"
          style={{ margin: "20px" }}
          onChange={(e) => (result.yaxis = e.target.value)}
        >
          <option style={{ width: "20px" }}>Yaxis</option>
          {abc}
        </select>
        <button className="attrapplybutton" onClick={(e) => handleSubmit(e)}>
          Apply
        </button>
      </div>
    );
  };

  let storyBoard = () => {
    return (
      <div className="App">
        <Visualization value={response} />
      </div>
    );
  };
  let displaycontent =
    result.xaxis === "" && result.yaxis === ""
      ? AttributesSelection()
      : storyBoard();
  return <div className="App">{displaycontent}</div>;
}

export default Attributes;
