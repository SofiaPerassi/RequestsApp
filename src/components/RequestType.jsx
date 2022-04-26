import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import json from '../data.json'

ChartJS.register(ArcElement, Tooltip, Legend);

  let get = 0;
  let post = 0;
  let head = 0;
  let invalid = 0;

  let requests = []

  for(let i = 0; i < json.length; ++i){
      if(json[i].method === 'GET'){
          get++;
          requests.push('GET')
      } else if(json[i].method === 'POST'){
          post++;
          requests.push('POST')
      } else if(json[i].method === 'HEAD'){
          head++;
          requests.push('HEAD')
      } else {
          invalid++;
          requests.push('INVALID')
      }
  }

export const data = {
  labels: [
    "GET",
    "POST",
    "HEAD",
    "INVALID",
  ],
  datasets: [
    {
      label: 'HTTPRequests',
      data: [get, post, head, invalid],
      backgroundColor: [
        '#ee9b00',
        '#94d2bd',
        '#ae2012',
        "#005f73",
      ],
      borderColor: [
        '#ee9b00',
        '#94d2bd',
        '#ae2012',
        "#005f73",
      ],
      borderWidth: 1,
    },
  ],
};

export function RequestType() {
  return <Doughnut data={data}/>;
}
