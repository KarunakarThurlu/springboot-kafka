import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import apiConfig from "../apiconfig/config";
import "../App.css";
function Savestoryboard(props) {
  let [name, setName] = useState([]);
  let handleChange = (e) => {
    setName(e.target.value);
  };

  let handleClick = (e) => {
    e.preventDefault();
    let parsed = sessionStorage.getItem("chartsdata");
    let finaldata = {
      ...JSON.parse(parsed),
      storyboardname: name,
      aggrigation: "sum",
    };
    let a = JSON.stringify(finaldata);
    let b = JSON.parse(a);
    axios
      .post(`${apiConfig.baseUrl}savestoryboard`, b)
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log("error");
      });
    console.log(a);
  };
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
                <input
                  type="text"
                  name="email"
                  className="login"
                  placeholder="story board name"
                  id="useremail"
                  onChange={(e) => handleChange(e)}
                ></input>
                <div className="errmsg"></div>

                <input
                  type="button"
                  className="loginaplly"
                  id="submit"
                  value="Save"
                  onClick={(e) => handleClick(e)}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Savestoryboard;
