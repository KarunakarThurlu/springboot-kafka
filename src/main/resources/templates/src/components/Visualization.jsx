import React from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

HighchartsMore(Highcharts);

function Visualization(props) {
  console.log(props);
  let charttitle = props.value.yaxistitle + " by " + props.value.xaxistitle;
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
        data: [1, 2, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        type: "column",
        name: props.value.yaxistitle,
        data: [1, 8, 2, 7, 3, 6, 4, 5],
      },
    ],
  };
  const line = {
    chart: {
      type: "pie",
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text: "Papulation",
      },
    },
    xAxis: {
      categories: [
        "Chaina",
        "India",
        "Russia",
        "Austreliya",
        "Amereka",
        "Brezil",
        "Canada",
        "Singapure",
      ],
      title: {
        text: "Countryname",
      },
    },
    colors: ["#007799", "#770077", "#990077", "#779988"],
    legend: {
      enabled: true,
      align: "right",
    },
    title: {
      text: "linechart",
    },
    series: [
      {
        data: [100, 25, 47, 70, 80, 29, 10],
      },
    ],
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
              options={polar}
            ></HighchartsReact>
          </div>
          <div className="col-3">
            <h4 style={{ color: "red" }}>
              Total {props.value.yaxistitle} in the world is $
              {props.value.count}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
