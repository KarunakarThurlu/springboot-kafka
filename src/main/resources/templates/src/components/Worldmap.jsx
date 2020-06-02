import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import Highmap from "highcharts/modules/map";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
Highmap(Highcharts);

function Worldmap() {
  let data = [
    ["wo-in", 2],
    ["wo-us", 4],
  ];
  const mapOptions = {
    chart: {
      map: "custom/world",
    },
    colorAxis: {
      min: 0,
      minColor: "#4444FF",
      maxColor: "#000022",
      stops: [
        [0, "#EFEFFF"],
        [0.67, "#4444FF"],
        [1, "#000022"],
      ],
    },
    title: {
      text: "Map Demo",
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
    },
    series: [
      {
        data: data,
        mapData: worldMap,
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
        },
        name: "Positive cases",
      },
      {
        data: [],
        type: "mapbubble",
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={mapOptions}
        constructorType={"mapChart"}
        containerProps={{ style: { height: "35em", widht: "35em" } }}
      ></HighchartsReact>
    </div>
  );
}

export default Worldmap;
