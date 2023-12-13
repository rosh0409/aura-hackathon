import { Box, Stack, Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';


const H1=styled.h1({
  fontSize:'30px',
  WebkitTextStroke:'0.1px white',
  fontWeight:'900',
  textShadow:'2px 2px #e7eceg',
  '@media (max-width:700px)':{
    fontSize:'20px'
  }
})

const AddExpense = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // state for handling data of expenses
  const  { category, expName, amount, date }=useState();

  // submit handler for handling change
  const submitHandler=(e)=>{
// code

  }



  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

 

  return (
  <>
  <Box sx={{
    textAlign:'center',
    background:'#e7ecef',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    padding:'10px'
  }}>
   <motion.div 
   initial={{opacity:0,scale:0}}
   animate={{opacity:1,scale:1}}
   transition={{duration:1}}
   >
   <H1>Add Expense Details</H1>
   </motion.div>
  <Box sx={{
   width:'100%',
   height:'100%',
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
  }}>
  
    <motion.div
    initial={{opacity:0,width:0}}
    animate={{opacity:1,width:'50%'}}
    transition={{duration:1}}
    style={{
      width:'50%',
      height:'80%',
      background:'white',
      padding:'60px',
      borderRadius:'20px',
      '@media (max-width:700px)':{
        width:"100%",
        fontSize:'10px'
      }
    }}>
    
    <form onSubmit={submitHandler}>
    <Stack gap={4}>
        <TextField
          label="Expense Name"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            '@media (max-width:700px)':{
              width:"80%",
              fontSize:'10px'
            }
          }}
        />
          <TextField
          label="Expense Amount"
          variant="outlined"
          value={inputValue2}
          onChange={handleInputChange2}
          sx={{
            '@media (max-width:700px)':{
              width:"80%"
            }
          }}
        />

        <FormControl variant="outlined" style={{ marginTop: '20px' }}>
          <InputLabel id="select-label">Expense Category</InputLabel>
          <Select
            label="Expense Category"
            labelId="select-label"
            value={selectValue}
            onChange={handleSelectChange}
            sx={{
              '@media (max-width:700px)':{
                width:"80%"
              }
            }}
          >
            <MenuItem value="option1">Education</MenuItem>
            <MenuItem value="option2">Vacation</MenuItem>
            <MenuItem value="option3">Grocery</MenuItem>
            <MenuItem value="option1">Medical</MenuItem>
            <MenuItem value="option2">Traveling</MenuItem>
            <MenuItem value="option3">Vehical</MenuItem>
            <MenuItem value="option1">Electricity</MenuItem>
            <MenuItem value="option2">Entertainment</MenuItem>
            <MenuItem value="option3">Subscription</MenuItem>
            <MenuItem value="option3">Home Rent</MenuItem>
          </Select>
        </FormControl>

        {/* install this---> npm install @mui/x-date-pickers
 */}
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose Date" />
      </DemoContainer>
    </LocalizationProvider>
    
        </Stack>
        <Stack padding={4}>
          <Button type='button' variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>

    </motion.div>

  </Box>
  </Box>
  </>
  )
}

export default AddExpense
