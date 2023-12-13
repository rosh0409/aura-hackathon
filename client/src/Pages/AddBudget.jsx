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
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddBudget = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState({
    budName: "",
    category: "",
    amount: null,
    date: new Date(),
    duration: "",
  });

  const handleBudgetClick = async () => {
    const toastId = toast.loading("Loading...");
    const { budName, category, amount, date, duration } = budget;
    if (!(budName && category && amount && date && duration)) {
      toast.dismiss(toastId);
      return toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "bottom-right",
      });
    }
    const { data } = await axios.post("/api/expense/saveBudget", budget, {
      withCredentials: true,
    });
    if (data.status === "success") {
      toast.dismiss(toastId);
      toast.success(data.message, {
        duration: 4000,
        position: "top-right",
      });
      setBudget({
        budName: "",
        category: "",
        amount: 0,
        date: new Date(),
        duration: "",
      });
      navigate("/add-budget");
    } else {
      toast.dismiss(toastId);
      toast.error(data.message, {
        duration: 4000,
        position: "top-right",
      });
      navigate("/add-budget");
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
                <TextField
                  name="budName"
                  value={budget.budName}
                  onChange={(e) =>
                    setBudget({ ...budget, [e.target.name]: e.target.value })
                  }
                  label="Name Your Budget"
                  variant="outlined"
                />
                <TextField
                  name="amount"
                  value={budget.amount}
                  onChange={(e) =>
                    setBudget({ ...budget, [e.target.name]: e.target.value })
                  }
                  label="Budget Amount"
                  type="number"
                  variant="outlined"
                />

                <FormControl variant="outlined" style={{ marginTop: "20px" }}>
                  <InputLabel>Budget Category</InputLabel>
                  <Select
                    name="category"
                    onChange={(e) =>
                      setBudget({ ...budget, [e.target.name]: e.target.value })
                    }
                    id="select-label"
                    label="Expense Category"
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
                <FormControl variant="outlined" style={{ marginTop: "20px" }}>
                  <InputLabel
                    id="select-label"
                    name="duration"
                    onClick={(e) =>
                      setBudget({ ...budget, [e.target.name]: e.target.value })
                    }
                  >
                    Budget Duration
                  </InputLabel>
                  <Select
                    label="Expense Category"
                    labelId="select-label"
                    name="duration"
                    onChange={(e) =>
                      setBudget({ ...budget, [e.target.name]: e.target.value })
                    }
                  >
                    <MenuItem value="1">1 Month</MenuItem>
                    <MenuItem value="3">3 Month</MenuItem>
                    <MenuItem value="6">6 Month</MenuItem>
                    <MenuItem value="12">1 Year</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack padding={4}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={handleBudgetClick}
                >
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

export default AddBudget;
