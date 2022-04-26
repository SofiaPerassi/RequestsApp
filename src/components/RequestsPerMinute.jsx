import React,  { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import json from '../data.json'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function RequestsPerMinute() {
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Requests per minute',
    },
  },
};

const total = []

for (let hour = 0; hour < 24; hour++) {
    const sameHour = json.filter(data => parseInt(data.datetime.hour) === hour)
    for (let minute = 0; minute < 60; minute++) {
        const sameMinute = sameHour.filter(data => parseInt(data.datetime.minute) === minute)
        total.push(sameMinute.length)
    }
}

let i = 0
const labels = total.map((el) => i++)

const data = useMemo(() => {
  return {
    labels,
    datasets: [
      {
        label: 'Data',
        data: total,
        borderColor: '#005f73',
        borderWidth: 1.5,
        pointRadius: 4,
        pointBackgroundColor: '#005f73',
      },
    ],
  }  
}, []);

  return <Line options={options} data={data} />;
}