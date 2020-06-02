import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Savestoryboard from "./Savestoryboard";
import ChangeCharttype from "./ChangeCharttype";
import axios from "axios";

import "../App.css";

HighchartsMore(Highcharts);

function Reports(props) {
  let charttitle = props.value.yaxistitle + " by " + props.value.xaxistitle;
  let [name, setName] = useState([]);
  let data = {
    xaxis: props.value.xaxistitle,
    yaxis: props.value.yaxistitle,
    aggrigation: "sum",
  };
  const spline = {
    chart: {
      type: "spline",
      /*sessionStorage.getItem("chartType") != undefined
          ? sessionStorage.getItem("chartType")
          : "column"*/
    },
    title: {
      text: charttitle,
    },
    legend: {
      enabled: true,
      align: "right",
    },
    colors: [
      "#000022",
      "#000877",
      "#990077",
      "#777088",
      "#449066",
      "#440066",
      "#006677",
      "#112233",
    ],
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

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={spline}
      ></HighchartsReact>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Savestoryboard sdata={data} />
          </div>
          {/* <ChangeCharttype chartdata={data} /> */}
        </div>
      </div>
    </div>
  );
}

export default Reports;
