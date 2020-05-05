import React from "react";
import Vizualization from "./Visualization";
import "../App.css";

function Contactus() {
  let result = sum(10, 20);
  return (
    <div className="App">
      <Vizualization />
    </div>
  );
}
let sum = (a, b) => {
  return a + b;
};
export default Contactus;

/*
import React from 'react';
import  Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HighchartsMore(Highcharts)

function Visualization(props) {

    console.log(props)
    const arrray=new Array();
    const series=props.value.series
    let yaxis=props.value.yaxis
    for(let i=0;i<yaxis.length;i++){
        let a=[series[i]]
        arrray.push({name:yaxis[i],data:[series[i]]})
    }
    console.log(arrray)
    let charttitle=props.value.yaxistitle +" by "+props.value.xaxistitle
    const spline={
        chart:{
            type:'bar',
        },
        title:{
            text: charttitle
        },
        legend:{
            enabled:true,
            align:'right'
        },
        tooltip:{
            enabled:true
        },
        colors:['#001177'],
        yAxis:{
            gridLineWidth:0,
            title:{
                
                text:props.value.yaxistitle
            },
            opposite:false,
           /* labels:{
                align:"right",
                x:-3,
                format:'{value:.2f}'
            }
        },
        xAxis:{
            categories:props.value.xaxis,
            title:{
               text: props.value.xaxistitle
            },
            
        },
        series:arrray
    }
    const bar={
        chart:{
            type:'column'
        },
        title:{
            text:charttitle
        },
        yAxis:[{
            gridLineWidth:0,
            yAxis:1,
            title:{
                color:['#112233'],
                text:props.value.yaxistitle
            }
        },
        {
            gridLineWidth:0,
            yAxis:2,
            title:{
                color:['#007700'],
                text:'Currency'
            }
        }],
        xAxis:{
            categories:props.value.xaxis,
            title:{
               text: props.value.xaxistitle,
              
            }
        },
        style:{
            width:'100px'
        },
       
        colors:['#001177'],
        series:arrray
        /*[{
            name:props.value.yaxistitle,
            //yAxis:0,
            data:props.value.yaxis
        },{
            name:'Currency',
            color:'#770077',
           // yAxis:1,
            data:['YEN','INR','RUBEL','ADOLLER','USDOLLER','BRAZIL','EURO','SDOLLER']
        }
    //]
    }
    const pie={
        chart:{
        type:'pie'
        },
        pane:{
            startAngle : 0,
            endAngle : 360
        },
        colors: ['#770077','#002299','#000011'],
        title:false,
        xAxis:{
            tickInterval: 45,
            min: 0,
            max: 360,
        },
        yAxis:{
            min: 0,
            max:10
        },
        plotOptions:{
            series:{
                pointStart: 0,
                pointInterval: 45
            },
            column:{
                pointPadding: 0,
                groupPadding: 0
            }
        },
        legend:{
            enabled:true,
            align:'right'
        },
        series:[{
            type:'column',
            name:'column',
            data:[8,7,9,6,5,4,3,2,1],
            pointPlacement:'between'
        },{
            type:'column',
            name:'line',
            data:[1,2,4,5,6,7,8,9,10]
        },
        {
            type:'column',
            name:'line',
            data:[1,8,2,7,3,6,4,5]
        }
    ]
    }
    const line={
        chart:{
            type:'pie'
        },
        yAxis:{
            gridLineWidth:0,
            title:{
                text:'Papulation'
            }
        },
        xAxis:{
            categories:['Chaina','India','Russia','Austreliya','Amereka','Brezil','Canada','Singapure'],
            title:{
               text: 'Countryname'
            }
        },
        colors:['#007799','#770077',"#990077","#779988"],
        legend:{
            enabled:true,
            align:'right'
        },
        title:{
            text:'linechart'
        },
        series:[{
            data:[100,25,47,70,80,29,10],
        }]
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                <div className="col-4" style={{height:"10px"}} ><HighchartsReact highcharts={Highcharts}  options={spline}></HighchartsReact></div>
                <div className="col-4" ><HighchartsReact highcharts={Highcharts}  options={bar}></HighchartsReact></div>
                <div className="col-4" ><HighchartsReact highcharts={Highcharts}  options={line}></HighchartsReact></div>
                <div className="col-3" ><h2>Count of {props.value.yaxistitle}</h2><h1>${props.value.count}</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Visualization

*/
