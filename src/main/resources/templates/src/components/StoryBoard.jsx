import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import apiConfig from "../apiconfig/config";
import Visualization from "./Visualization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
function StoryBoards() {
  let [SB_Names, setSB_Names] = useState([]);
  let [SB_data, setSB_data] = useState([]);
  useEffect(() => {
    axios
      .post(`${apiConfig.baseUrl}getsavedstoryboarddata`, null, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSB_Names(res.data);
        console.log(res.data);
      })
      .catch(() => console.log("error"));
  }, []);
  let handleclick = (e) => {
    e.preventDefault();
    let name = e.target.value;
    console.log("storyboard name is " + e.target.value);
    let data = {
      sb_name: name,
    };
    axios
      .post(`${apiConfig.baseUrl}viewstoryboard`, data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSB_data(res.data);
      })
      .catch((e) => console.log("error"));
  };
  let dashboard = () => {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div class="row justify-content-around">
            <ul>
              {SB_Names.map((e) => (
                <li className="co">
                  {e.sb_name}
                  <br />
                  <FontAwesomeIcon
                    icon={faCube}
                    style={{ fontSize: "50px" }}
                  ></FontAwesomeIcon>
                  <br />
                  <button
                    className="sbview"
                    value={e.sb_name}
                    onClick={(e) => handleclick(e)}
                  >
                    View Storyboard
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  let storyboard = () => {
    return (
      <div className="App">
        <Visualization value={SB_data} />
      </div>
    );
  };
  let displaycontent = SB_data.length == 0 ? dashboard() : storyboard();
  return <div>{displaycontent}</div>;
}
export default StoryBoards;
