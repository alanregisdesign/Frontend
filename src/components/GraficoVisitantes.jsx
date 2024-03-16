import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Janeiro', visitantes: 400 },
  { name: 'Fevereiro', visitantes: 300 },
  { name: 'Março', visitantes: 200 },
  { name: 'Abril', visitantes: 130 },
  { name: 'Maio', visitantes: 150 },
  { name: 'Junho', visitantes: 245 },
  { name: 'Julho', visitantes: 800 },
  { name: 'Agosto', visitantes: 650 },
  { name: 'Setembro', visitantes: 450 },
  { name: 'Outubro', visitantes: 540 },
  { name: 'Novembro', visitantes: 300 },
  { name: 'Dezembro', visitantes: 730 },
];

const BarChartComponent = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="visitantes" fill="#8884d8" />
    </BarChart>
  );
}

export default BarChartComponent;
