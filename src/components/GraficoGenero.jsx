import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Masculino', value: 400 },
  { name: 'Feminino', value: 300 },
  { name: 'Outros', value: 200 },
  { name: 'Preferiram não responder', value: 50 },
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{outline: 'none'}} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{position: 'relative'}}/>
      </PieChart>
    </Container>
  );
}

export default PieChartComponent;
