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
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;

const AddExpense = () => {
  const [expenses, setExpenses] = useState({
    expName: "",
    amount: 0,
    category: "",
    date: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    setExpenses({ ...expenses, [e.target.name]: e.target.value });
    // console.log(expenses)
  };

  const handledatechange = (new_date) => {
    // e.preventDefault()
    setExpenses({ ...expenses, date: new_date.$d });
    // console.log(expenses.date.$d)
  };

  const handlecatchange = (e) => {
    setExpenses({ ...expenses, category: e.target.value });
  };

  const handlesubmit = async (e) => {
    // alert("hi")
    const toastId = toast.loading("Loading...");

    e.preventDefault();
    console.log(expenses);
    const { data } = await axios.post("/api/expense/saveExpense", expenses, {
      withCredentials: true,
    });
    // console.log(data);
    if (data.status === "success") {
      toast.dismiss(toastId);
      toast.success(data.message, {
        duration: 4000,
        position: "top-right",
      });
      setExpenses({
        expName: "",
        amount: 0,
        category: "",
        date: "",
      });
    } else {
      toast.dismiss(toastId);
      toast.error(data.message, {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          background: "#e7ecef",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 className="text-2xl my-8">Add Expense Details</h1>
        <Box
          sx={{
            // width: "100%",
            // height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { lg: "50vw", xl: "90vw" },
              height: "80vh",
              background: "white",
              padding: "60px",
              borderRadius: "20px",
            }}
          >
            <form onChange={handlechange} onSubmit={handlesubmit}>
              <Stack gap={4}>
                <TextField
                  label="Expense Name"
                  name="expName"
                  value={expenses.expName}
                  variant="outlined"
                />
                <TextField
                  label="Expense Amount"
                  type="number"
                  name="amount"
                  value={expenses.amount}
                  variant="outlined"
                />

                <FormControl variant="outlined" style={{ marginTop: "20px" }}>
                  <InputLabel id="select-label">Expense Category</InputLabel>
                  <Select
                    label="Expense Category"
                    name="category"
                    value={expenses.category}
                    onChange={handlecatchange}
                    labelId="select-label"
                  >
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Vacation">Vacation</MenuItem>
                    <MenuItem value="Grocery">Grocery</MenuItem>
                    <MenuItem value="Medical">Medical</MenuItem>
                    <MenuItem value="Traveling">Traveling</MenuItem>
                    <MenuItem value="Vehical">Vehical</MenuItem>
                    <MenuItem value="Electricity">Electricity</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Subscription">Subscription</MenuItem>
                    <MenuItem value="Home Rent">Home Rent</MenuItem>
                  </Select>
                </FormControl>

                {/* install this---> npm install @mui/x-date-pickers
                 */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      value={expenses.date}
                      onChange={handledatechange}
                      label="Choose Date"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
              <Stack padding={4}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddExpense;
