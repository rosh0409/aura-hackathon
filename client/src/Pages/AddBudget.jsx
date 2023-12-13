import {
    Box,
    Stack,
    Button,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import React from "react";
  import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddBudget = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          background: "#e7ecef",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1>Add Expense Details</h1>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "60%",
              background: "white",
              padding: "60px",
              borderRadius: "20px",
            }}
          >
            <form>
              <Stack gap={4}>
                <TextField label="Name Your Budget" variant="outlined" />
                <TextField label="Budget Amount" variant="outlined" />

                <FormControl variant="outlined" style={{ marginTop: "20px" }}>
                  <InputLabel id="select-label">Budget Category</InputLabel>
                  <Select label="Expense Category" labelId="select-label">
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
                <FormControl variant="outlined" style={{ marginTop: "20px" }}>
                  <InputLabel id="select-label">Budget Duration</InputLabel>
                  <Select label="Expense Category" labelId="select-label">
                    <MenuItem value="option1">1 Month</MenuItem>
                    <MenuItem value="option2">3 Month</MenuItem>
                    <MenuItem value="option3">6 Month</MenuItem>
                    <MenuItem value="option1">1 Year</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack padding={4}>
                <Button type="button" variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AddBudget