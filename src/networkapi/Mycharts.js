import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  import { FcBinoculars,FcBearish,FcDislike,FcMissedCall } from "react-icons/fc";


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
        name: "nav",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
  ];


function Mycharts() {
  return (
    <div className='container bg-dark text-white'>
        
        <div className='row'>
        <div className='col-12 text-center h2'>
            react chart layout
        </div>
        <div className='col-12'>
    <BarChart
      width={1200}
      height={600}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="pv" fill="red" />
      <Bar dataKey="uv" fill="green" />
      <Bar dataKey="amt" fill="blue" />
    </BarChart>
    </div>
       
    </div>

<div className='row'>
    <div className='col-12'>
    <FcBinoculars></FcBinoculars>
    <h1><FcBearish/></h1>
    <h2><FcDislike/></h2>
    <h3><FcMissedCall/></h3>
    </div>
</div>

        </div>
  )
}

export default Mycharts