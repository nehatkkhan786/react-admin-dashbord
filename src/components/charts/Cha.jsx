import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "January", Total: "40000" },
    { name: "Febuary", Total: "29300" },
    { name: "March", Total: "50000" },
    { name: "April", Total: "29000" },
    { name: "May", Total: "68000" },
    { name: "June", Total: "63000" }
  ];

const Cha = () => {
  return (
<ResponsiveContainer width='100%' aspect={2/1}>
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" className="chartGrid" />

      <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
    </AreaChart>
    </ResponsiveContainer>
  )
}

export default Cha