import json from '../data.json';
import React, { useMemo } from "react";
import BarChart from './BarChart';

export default function RequestsDistribution() {

  let info = 0;
  let success = 0;
  let redirect = 0;
  let clientError = 0;
  let serverError = 0;

  let requests = []

  const labels = [
    "INFO",
    "SUCCESS",
    "REDIRECT",
    "CLIENT ERROR",
    "SERVER ERROR",
  ];

  for(let i = 0; i < json.length; ++i){
      let data = parseInt(json[i].response_code)
      if(data > 99 && data < 200){
          info++;
          requests.push(data)
      } else if(data > 199 && data < 300){
          success++;
          requests.push(data)
      } else if(data > 299 && data < 400){
          redirect++;
          requests.push(data)
      } else if(data > 399 && data < 500){
          clientError++;
          requests.push(data)
      } else {
          serverError++;
          requests.push(data)
      }
  }

  const array = useMemo(() => {
    return {
      datasets: [
        {
          //label: ["INFO", "SUCCESS", "REDIRECT", "CLIENT ERROR", "SERVER ERROR"],
          data: [info, success, redirect, clientError, serverError],
          backgroundColor: [
            '#ee9b00',
            '#94d2bd',
            '#ae2012',
            "#005f73",
            "#0a9396",
          ]
        },
      ],
      labels,
    };
  }, []);

  return (
      <BarChart chartData={array}/>
  )
}
