// src/components/ProductBarGraph.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import axios from 'axios';

const CurveGraph = () => {
  console.log("hi")
  async function fetchData(){
    const { data } = await axios.get("api/graph/fetchCategory");
    console.log(data)
    setData(data.categoryData)
    console.log(data)
    console.log("hi")
  }

  const [data,setData] = useState()
  useEffect(()=>{
    fetchData()
  }
    ,[data])
 
  fetchData()

  return (
    <div>
       <Box flex={5} display={"flex"} flexDirection={"column"} fyjustiContent={"center"} alignItems={"center"}>
      <Typography variant="h6" sx={{color:"black"}}>Expense Analysis</Typography>
     
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="age" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </Box>
    </div>
  );
};

export default CurveGraph;