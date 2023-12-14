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

const AddIncome = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#e7ecef",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
                <TextField label="Income Source" variant="outlined" />
                <TextField label="Amount" variant="outlined" />

                {/* install this---> npm install @mui/x-date-pickers
                 */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Choose Date" />
                  </DemoContainer>
                </LocalizationProvider>
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

export default AddIncome