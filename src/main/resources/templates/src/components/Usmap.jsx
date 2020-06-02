import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import Highmap from "highcharts/modules/map";
import mapDataUS from "@highcharts/map-collection/countries/us/us-all.geo.json";

Highmap(Highcharts);
//India-https://api.rootnet.in/covid19-in/stats/latest
//World-https://api.coronavirusapi.dev/countries/?key=API_KEY&_gl=1*1g9iahp*_ga*YW1wLTN4R3l0dnB5TEdUTEdILXRsUjJtdlE.
function Usmap() {
  let data = [
    ["us-ma", 0],
    ["us-wa", 1],
    ["us-ca", 2],
    ["us-or", 3],
    ["us-wi", 4],
    ["us-me", 5],
    ["us-mi", 6],
    ["us-nv", 7],
    ["us-nm", 8],
    ["us-co", 9],
    ["us-wy", 10],
    ["us-ks", 11],
    ["us-ne", 12],
    ["us-ok", 13],
    ["us-mo", 14],
    ["us-il", 15],
    ["us-in", 16],
    ["us-vt", 17],
    ["us-ar", 18],
    ["us-tx", 19],
    ["us-ri", 20],
    ["us-al", 21],
    ["us-ms", 22],
    ["us-nc", 23],
    ["us-va", 24],
    ["us-ia", 25],
    ["us-md", 26],
    ["us-de", 27],
    ["us-pa", 28],
    ["us-nj", 29],
    ["us-ny", 30],
    ["us-id", 31],
    ["us-sd", 32],
    ["us-ct", 33],
    ["us-nh", 34],
    ["us-ky", 35],
    ["us-oh", 36],
    ["us-tn", 37],
    ["us-wv", 38],
    ["us-dc", 39],
    ["us-la", 40],
    ["us-fl", 41],
    ["us-ga", 42],
    ["us-sc", 43],
    ["us-mn", 44],
    ["us-mt", 45],
    ["us-nd", 46],
    ["us-az", 47],
    ["us-ut", 48],
    ["us-hi", 49],
    ["us-ak", 50],
    ["undefined", 51],
  ];
  const mapOptions = {
    chart: {
      map: "countries/us/us-all",
    },
    colorAxis: {
      min: 0,
      minColor: "#4444FF",
      maxColor: "#000022",
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
        mapData: mapDataUS,

        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
        },
        name: "Positive cases",
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

export default Usmap;
