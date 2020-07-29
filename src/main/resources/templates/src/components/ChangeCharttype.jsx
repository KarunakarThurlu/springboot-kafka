import React, { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import Reports from "./Report";
import apiConfig from "../apiconfig/config";

function ChangeCharttype(props) {
  let chartType;
  let [chartdata, setChartdata] = useState([]);
  let chartDataa = props.chartdata;

  let handleClick = (e) => {
    e.preventDefault();

    axios
      .post(`${apiConfig.baseUrl}selectedAttributes`, chartDataa, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setChartdata(res.data);
        console.log(chartdata);
      })
      .catch(() => console.log("error"));
    console.log(chartType);
  };
  let reportSettings = () => {
    return (
      <div className="countAsave">
        <Popup
          trigger={<button className="button">Save Story Board </button>}
          modal
          closeOnDocumentClick
        >
          <div className="">
            <div className="container" style={{ paddingTop: "40px" }}>
              <div className="container" style={{ paddingTop: "15px" }}>
                <form>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Aggrigation
                    </label>
                    <select
                      className="yaxis"
                      className="form-control"
                      onChange={(e) =>
                        sessionStorage.setItem("chartType", e.target.value)
                      }
                    >
                      <option>ChooseCharttype</option>
                      <option value="pie">pie</option>
                      <option value="column">column</option>
                      <option value="spline">spline</option>
                      <option value="line">line</option>
                      <option value="bubble">bubble</option>
                    </select>
                  </div>

                  <input
                    type="button"
                    className="loginaplly"
                    id="submit"
                    value="Apply"
                    onClick={(e) => handleClick(e)}
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  };
  let updatereport = () => {
    return (
      <div className="App">
        <Reports value={chartdata} />
      </div>
    );
  };
  let displycontent =
    chartdata.length === 0 ? reportSettings() : updatereport();
  return <div className="App">{displycontent}</div>;
}

export default ChangeCharttype;
