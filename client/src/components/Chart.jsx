import {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2"
import React from 'react'


class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:{
                labels:["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
                datasets:[
                    {
                     label:"mood score",
                     data:props.moodresult,
                     fill: false,
                     backgroundColor: ['rgb(255, 99, 132)','rgb(255, 165, 0)'],
                     borderColor:['rgb(255, 99, 132)','rgb(255, 165, 0)'],
                     tension: 0.1
                    }
                ],
            }
        }
    }

    render(){
       
        return(
            <div class="chart">
               <Line
	            data={this.state.chartData}
	            options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default Chart;