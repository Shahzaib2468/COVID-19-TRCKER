import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
    setDailyData(await fetchDailyData());
    }

    fetchAPI();
  });

  const lineChart = (
        dailyData.length
        ? (
            <Line
                data={{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                    {
                      label: 'People',
                      backgroundColor: [
                      'rgba(0, 0, 255, 0.5)', 
                      'rgba(50,205,50)', 
                      'rgba(255, 0, 0, 0.5)'],
                      data: [confirmed.value, recovered.value, deaths.value],
                    },
                  ],
                }}
                options={{
                  legend: { display: false },
                  title: { display: true, text: `Current state in ${country}` },
                  

                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: "rgba(0,0,255,0.5)",
                        backgroundColor: "rgba(153, 255, 255,0.5)",
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: "rgba(250,0,0.5)",
                        backgroundColor: 'rgb(255, 51, 51,0.6)',
                        fill: true
                    }]
                }}
            />
        ) : null
            
    )
  
  return (
    <div className={styles.container}>
        {lineChart}
    </div>
  )
}

export default Chart;



