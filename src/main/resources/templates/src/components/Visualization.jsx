import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Savestoryboard from "./Savestoryboard";

import "../App.css";

HighchartsMore(Highcharts);

function Visualization(props) {
  let [name, setName] = useState([]);
  let handlechange = (e) => {
    setName(e.target.value);
  };
  let handleclick = (e) => {
    console.log(name + "====");
    e.preventDefault();
  };

  let data = {
    xaxis: props.value.xaxistitle,
    yaxis: props.value.yaxistitle,
  };
  sessionStorage.setItem("chartsdata", JSON.stringify(data));
  let charttitle = props.value.yaxistitle + " by " + props.value.xaxistitle;
  let piedata = [];
  let o = [];
  for (let i = 0; i < props.value.series.length; i++) {
    let obj = {
      y: parseInt(props.value.yaxis[i]),
      name: props.value.xaxis[i],
    };
    piedata.push(obj);
  }
  let p = { data: piedata, name: props.value.yaxistitle };
  o.push(p);
  const spline = {
    chart: {
      type: "spline",
    },
    title: {
      text: charttitle,
    },
    legend: {
      enabled: true,
      align: "right",
    },
    colors: ["#001177"],
    yAxis: {
      gridLineWidth: 0,
      title: {
        enabled: true,
        text: props.value.yaxistitle,
      },
    },
    xAxis: {
      categories: props.value.xaxis,
      title: {
        text: props.value.xaxistitle,
      },
    },
    series: [
      {
        name: props.value.yaxistitle,
        data: props.value.series,
      },
    ],
  };
  const bar = {
    chart: {
      type: "column",
    },
    title: {
      text: charttitle,
    },
    yAxis: [
      {
        gridLineWidth: 0,
        yAxis: 1,
        title: {
          color: ["#112233"],
          text: props.value.yaxistitle,
        },
      },
      /* {
            gridLineWidth:0,
            yAxis:2,
            title:{
                color:['#007700'],
                text:'Currency'
            }
        }*/
    ],
    xAxis: {
      categories: props.value.xaxis,
      title: {
        text: props.value.xaxistitle,
      },
    },
    style: {
      width: "100px",
    },
    legend: {
      enabled: true,
      align: "right",
    },
    colors: ["#001177"],
    series: [
      {
        name: props.value.yaxistitle,
        //yAxis:0,
        data: props.value.series,
      } /*{
            name:'Currency',
            color:'#770077',
           // yAxis:1,
            data:['YEN','INR','RUBEL','ADOLLER','USDOLLER','BRAZIL','EURO','SDOLLER']
        }*/,
    ],
  };
  const polar = {
    chart: {
      polar: true,
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
    },
    colors: ["#770077", "#002299", "#000011"],
    title: false,
    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
    },
    yAxis: {
      min: 0,
      max: 10,
    },
    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45,
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
      },
    },
    legend: {
      enabled: true,
      align: "right",
    },
    series: [
      {
        type: "column",
        name: props.value.xaxistitle,
        data: props.value.xaxis,
        pointPlacement: "between",
      },
      {
        type: "column",
        name: props.value.yaxistitle,
        data: props.value.series,
      },
      {
        type: "column",
        name: props.value.xaxistitle,
        data: props.value.xaxis,
      },
    ],
  };
  const pie = {
    chart: {
      type: "pie",
    },
    yAxis: {
      gridLineWidth: 0,
      name: props.value.yaxis,
      title: {
        text: props.value.yaxistitle,
      },
    },
    xAxis: {
      categories: props.value.xaxis,
      title: {
        text: props.value.xaxistitle,
      },
    },
    colors: [
      "#000099",
      "#000877",
      "#990077",
      "#777088",
      "#449066",
      "#440066",
      "#006677",
      "#112233",
    ],
    legend: {
      enabled: true,
      align: "right",
    },
    title: {
      text: charttitle,
    },
    series: o,
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" style={{ height: "10px" }}>
            <HighchartsReact
              highcharts={Highcharts}
              options={spline}
            ></HighchartsReact>
          </div>
          <div className="col-4">
            <HighchartsReact
              highcharts={Highcharts}
              options={bar}
            ></HighchartsReact>
          </div>
          <div className="col-4">
            <HighchartsReact
              highcharts={Highcharts}
              options={pie}
            ></HighchartsReact>
          </div>
          <div className="col-6">
            <div className="countAsave">
              <h4 style={{ color: "blue" }}>
                Total {props.value.yaxistitle} in the world is{" "}
                {props.value.count}
              </h4>
            </div>
          </div>
          <div className="col-6">
            <Savestoryboard sdata={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
