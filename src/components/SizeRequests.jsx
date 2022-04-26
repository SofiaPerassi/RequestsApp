import json from '../data.json';
import React, { useMemo } from "react";
import BarChart from './BarChart';

export default function SizeRequests() {
    
    let xxxs = 0;
    let xxs = 0;
    let xs = 0;
    let s = 0;
    let m = 0;
    let l = 0;
    let xl = 0;
    let xxl = 0;
    let xxxl = 0;
    let biggest = 0;

    for(let i = 0; i < json.length; ++i){
        let data = parseInt(json[i].response_code)
        let size = parseInt(json[i].document_size)
        if(data === 200 && size < 1000){
            if(size < 100){
                xxxs++
            } else if(size > 99 && size < 200){
                xxs++
            } else if(size > 199 && size < 300){
                xs++
            } else if(size > 299 && size < 400){
                s++
            } else if(size > 399 && size < 500){
                m++
            } else if(size > 499 && size < 600){
                l++
            } else if(size > 599 && size < 700){
                xl++
            } else if(size > 699 && size < 800){
                xxl++
            } else if(size > 799 && size < 900){
                xxxl++
            } else {
                biggest++
            }
            
        } 
        //requests.push(size)
    }


  const labels = [
      '0 - 99',
      '100 - 199',
      '200 - 299',
      '300 - 399',
      '400 - 499',
      '500 - 599',
      '600 - 699',
      '700 - 799',
      '800 - 899',
      '900 - 999',
  ];

  const array = useMemo(() => {
    return {
      datasets: [
        {
          label: "HTTP Requests Size (BYTES)",
          data: [xxxs, xxs, xs, s, m, l, xl, xxl, xxxl, biggest],
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
