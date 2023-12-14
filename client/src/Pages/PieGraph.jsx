import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "expense A", value: 10000, color: "#8884d8" },
  { name: "expense B", value: 1000, color: "#82ca9d" }
];

const PieGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={550}>
      <PieChart height={550}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill={data[0].color}
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill={data[index].color}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            );
          }}
        />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
