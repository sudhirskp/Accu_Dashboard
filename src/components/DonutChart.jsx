import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'


const COLORS = ["#2563eb", "#f59e0b", "#e11d48", "#22c55e"]


export default function DonutChart({ data, labels }){
const chartData = data.map((v, i) => ({ name: labels[i], value: v }))
return (
<PieChart width={150} height={150}>
<Pie data={chartData} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={60}>
{chartData.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
</Pie>
<Legend verticalAlign="bottom" height={36}/>
</PieChart>
)
}