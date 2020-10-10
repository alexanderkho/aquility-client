import React from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Label, ResponsiveContainer } from 'recharts'

export function ConcentrationChart({data}) {
  return (
    <ResponsiveContainer width='100%' height={500} >
      <LineChart data={data} 
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" interval='preserveEnd' type='number' domain={[0, 'auto']}>
          <Label value="Elapsed Time (ms)" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Concentration (dimensionless)', angle: -90, position: 'center', offset: -5 }}/>
        <Legend />
        <Line type="monotone" dataKey="Benzene" stroke="#8884d8" isAnimationActive={false}/>
        <Line type="monotone" dataKey="Acetone" stroke="#82ca9d" isAnimationActive={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
