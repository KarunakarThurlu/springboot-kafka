import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Visualization from "./Visualization";

function StoryBoards() {
  let [SB_Names, setSB_Names] = useState([]);
  let [SB_data, setSB_data] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2020/app/getsavedstoryboarddata")
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
      .post("http://localhost:2020/app/viewstoryboard", data)
      .then((res) => {
        setSB_data(res.data);
      })
      .catch((e) => console.log("error"));
  };
  let dashboard = () => {
    return (
      <div className="container-fluid">
        <div class="row justify-content-around">
          <ul>
            {SB_Names.map((e) => (
              <li className="co">
                {e.sb_name}
                <br />
                <button value={e.sb_name} onClick={(e) => handleclick(e)}>
                  View Storyboard
                </button>
              </li>
            ))}
          </ul>
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
