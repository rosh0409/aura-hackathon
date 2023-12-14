// import React, { useEffect } from "react";
// import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

// // const data = [
// //   { name: "expense A", value: 10000, color: "#8884d8" },
// //   { name: "expense B", value: 1000, color: "#82ca9d" }
// // ];
// const backendData = {
//   "Vacation": 0,
//   "Grocery": 0,
//   "Medical": 0,
//   "Traveling": 1234,
//   "Vehical": 0,
//   "Electricity": 124,
//   "Entertainment": 0,
//   "Subscription": 124,
//   "Home Rent": 124
// };

// const PieGraph = () => {
//   const convertDataForChart = (data) => {
//     return Object.entries(data).map(([name, value], index) => ({
//       name,
//       value,
//       color: `#${((index + 1) * 10000).toString(16)}` // Generate a unique color for each category
//     }));
//   };

//   const chartData = convertDataForChart(backendData);
//   return (
//     <ResponsiveContainer width="100%" height={550}>
//       <PieChart height={550}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           fill={data[0].color}
//           dataKey="value"
//           label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
//             const RADIAN = Math.PI / 180;
//             const radius = 25 + innerRadius + (outerRadius - innerRadius);
//             const x = cx + radius * Math.cos(-midAngle * RADIAN);
//             const y = cy + radius * Math.sin(-midAngle * RADIAN);

//             return (
//               <text
//                 x={x}
//                 y={y}
//                 fill={data[index].color}
//                 textAnchor={x > cx ? "start" : "end"}
//                 dominantBaseline="central"
//               >
//                 {data[index].name} ({value})
//               </text>
//             );
//           }}
//         />
//         <Legend verticalAlign="bottom" height={36} />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default PieGraph;

import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const backendData = {
  "Vacation": 0,
  "Grocery": 0,
  "Medical": 0,
  "Traveling": 1234,
  "Vehical": 0,
  "Electricity": 124,
  "Entertainment": 0,
  "Subscription": 124,
  "Home Rent": 124
};

const getColorScale = (count) => {
  // Generate a color scale based on the number of categories
  const colors = ["#fb8500", "#82ca9d", "#ffc658", "#0088fe", "#00C49F", "#FFBB28", "#FF8042", "#FF7F50", "#FF4500"];
  return colors.slice(0, count);
};

const convertDataForChart = (data) => {
  const entries = Object.entries(data);
  const colorScale = getColorScale(entries.length);
  const total = entries.reduce((acc, [name, value]) => acc + value, 0);

  return entries.map(([name, value], index) => ({
    name,
    value,
    percentage: total === 0 ? 0 : (value / total) * 100,
    color: colorScale[index]
  }));
};

const PieGraph = () => {
  const chartData = convertDataForChart(backendData);

  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart height={600}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percentage, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <g key={index}>
                <text
                  x={x}
                  y={y}
                  fill={chartData[index].color}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                  fontSize="12"
                >
                  {`${chartData[index].name}: ${(percentage.toFixed(2))}%`}
                </text>
              </g>
            );
          }}
        />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
