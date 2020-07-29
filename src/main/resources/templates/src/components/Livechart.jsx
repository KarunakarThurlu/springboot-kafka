import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Header from "./Header";
import axios from "axios";

import "../App.css";

HighchartsMore(Highcharts);

function Livechart(props) {
  let [name, setName] = useState([]);

  const spline = {
    chart: {
      type: "spline",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },
    title: {
      text: "live Data",
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
      title: {
        text: "Value",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080",
        },
      ],
    },
    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
      title: "Date and Time",
    },
    series: [
      {
        name: "Random data",
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  };

  return (
    <div className="report">
      <Header />
      <HighchartsReact
        highcharts={Highcharts}
        options={spline}
      ></HighchartsReact>
    </div>
  );
}

export default Livechart;
