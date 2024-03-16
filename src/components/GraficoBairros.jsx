import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Janeiro', visitantes: 400 },
  { name: 'Fevereiro', visitantes: 300 },
  { name: 'Março', visitantes: 200 },
  { name: 'Abril', visitantes: 340 },
  { name: 'Maio', visitantes: 100 },
];

const LineChartComponent = () => {
  return (
    <LineChart width={500} height={300} data={data} margin={{top: 40}}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="visitantes" stroke="#8884d8" />
    </LineChart>
  );
}

export default LineChartComponent;