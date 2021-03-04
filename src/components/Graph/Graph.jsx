import React, {useState, useEffect} from 'react';
import { fetchDailyData} from '../../api/Api.js';
import { Line, Bar } from 'react-chartjs-2';

import './Graph.css';

//Chart Documentation --->> https://www.chartjs.org/docs/latest/ 

const Graph = ({data, country}) => {
    const [dailyData, setDailyData]= useState([]);
    

    useEffect(() => {
        const fetchAPI =  async () => {
            setDailyData( await fetchDailyData());
            
        }

        

        fetchAPI();
    },[]);

    

    const lineChart = (
       dailyData.length 
        ? (<div className="graph">
          <Line
          data={{
             labels: dailyData.map(({ date }) => date),
             datasets: [{
                data : dailyData.map(({ confirmed }) => confirmed),
                label : 'INFECTED',
                borderColor: 'rgb(50, 50, 250)',
                backgroundColor: 'rgba(154, 132, 252,0.5)',
                fill : true,
             }, {
                data : dailyData.map(({ deaths }) => deaths),
                label : 'DEATHS',
                borderColor: 'rgb(250,50,50)',
                backgroundColor: 'rgba(250,50,50,0.5)',
                fill : true,

             }],
            }}
        /></div>) : null
    );



    const barChart = (
        data.confirmed 
        ? ( <div className="graph">
            <Bar 
                data ={ {
                    labels: ['Infected','Recovered','Deaths'],
                    datasets:[{
                        label: 'Total',
                       
                        backgroundColor: [ 'rgba(154, 132, 252,0.5)','rgba(95, 250, 95,0.5)','rgba(255, 100, 100,0.5)'],
                        data:[data.confirmed.value, data.recovered.value, data.deaths.value],
                    }]
                }}
                options={{
                    legend : {display: false},
                    title : {display: true, text: ''},
                }}
            /></div>

        ) : null
    );

    return (
        <div className="line_chart">
           {country ? barChart :lineChart}
        </div>
    )

}

export default Graph;