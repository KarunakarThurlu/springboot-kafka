import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import apiConfig from "../apiconfig/config";
import Report from "./Report";

function Reports() {
  let [reports_Names, setReports_Names] = useState([]);
  let [report_data, setReport_data] = useState([]);
  useEffect(() => {
    axios
      .post(`${apiConfig.baseUrl}getsavedreportsdata`, null, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setReports_Names(res.data);
        console.log("===saved reports===" + res.data);
      })
      .catch(() => console.log("error"));
  }, []);
  let handleclick = (e) => {
    e.preventDefault();
    let name = e.target.value;
    console.log("storyboard name is " + e.target.value);
    let data = {
      report_name: name,
      reportType: "report",
    };
    axios
      .post(`${apiConfig.baseUrl}viewreport`, data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setReport_data(res.data);
      })
      .catch((e) => console.log("error"));
  };
  let dashboard = () => {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div class="row justify-content-around">
            <div>
              <ul>
                {reports_Names.map((e) => (
                  <li className="co">
                    {e.report_name}
                    <br />
                    <FontAwesomeIcon
                      icon={faCube}
                      style={{ fontSize: "50px" }}
                    ></FontAwesomeIcon>
                    <br />
                    <button
                      className="sbview"
                      value={e.report_name}
                      onClick={(e) => handleclick(e)}
                    >
                      View Report
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  let report = () => {
    return (
      <div className="App">
        <Header />
        <Report value={report_data} />
      </div>
    );
  };
  let displaycontent = report_data.length === 0 ? dashboard() : report();
  return <div>{displaycontent}</div>;
}

export default Reports;
