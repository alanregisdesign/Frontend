import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Fortaleza', value: 900 },
  { name: 'Sobral', value: 100 },
  { name: 'Maracanaú', value: 200 },
  { name: 'Caucaia', value: 250 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PieChartComponent = () => {
  return (
    <Container>
      <PieChart width={400} height={300}>
        <Pie dataKey="value" data={data} cx={200} cy={150} outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ position: 'relative' }} />
      </PieChart>
    </Container>
  );
}

export default PieChartComponent;
