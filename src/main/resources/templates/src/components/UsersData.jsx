import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import apiConfig from "../apiconfig/config";
import axios from "axios";
import Header from "./Header";

function UsersData() {
  const [usersData, setusersData] = useState([]);
  let [color, setColor] = useState("gray");
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then((res) => {
        setData(res.data);
        passdata(res.data);
      })
      .catch(() => console.log("error"));
  }, []);

  function passdata(resultdata) {
    let result = [];
    for (let key in resultdata) {
      let array = resultdata[key];
      let a = array[array.length - 1];
      let obj = {
        country_name: key,
        upto_today: a.date,
        conformed_cases: a.confirmed,
        recovered_cases: a.recovered,
        deaths: a.deaths,
      };
      result.push(obj);
    }
    axios
      .post(`${apiConfig.baseUrl}updatecoviddata`, result,{headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }})
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => console.log("erroe"));
  }
  console.log(data);
  let abc = data.Afghanistan;
  console.log(abc);
  useEffect(() => {
    axios
      .post(`${apiConfig.baseUrl}getusersdata`,null,{headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }})
      .then((res) => {
        setusersData(res.data);
        console.log(res.data);
      })
      .catch(() => console.log("erroe occured"));
  }, []);
  return (
    <div>
      <Header/>
      <Table striped hover size="sm" variant="blue">
        <thead>
          <tr>
            <th>ID</th>
            <th>FName</th>
            <th>LName</th>
            <th>Email</th>
            <th>Domain</th>
            <th>IPAddress</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.email}</td>
              <td>{e.domain}</td>
              <td>{e.ip_address}</td>
              <td>
                <i
                  className="fa fa-pencil"
                  aria-hidden="true"
                  style={{ fontSize: "23px", color: "green" }}
                ></i>
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ fontSize: "23px", color: color }}
                  onMouseOver={() => setColor("red")}
                  onMouseLeave={() => setColor("gray")}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersData;
