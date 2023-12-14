import { Box, Stack, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const AddIncome = () => {
  const navigate = useNavigate();
  const [income, setIncome] = useState({
    source: "",
    amount: null,
    date: "",
  });

  const handleIncomeClick = async () => {
    console.log(income);
    const toastId = toast.loading("Loading...");
    console.log(income);
    const { source, amount, date } = income;
    console.log(source, amount, date);
    if (!(source && amount && date)) {
      toast.dismiss(toastId);
      return toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "bottom-right",
      });
    }
    const { data } = await axios.post("/api/expense/saveIncome", income, {
      withCredentials: true,
    });
    if (data.status === "success") {
      toast.dismiss(toastId);
      toast.success(data.message, {
        duration: 4000,
        position: "top-right",
      });
      setIncome({
        source: "",
        amount: 0,
        date: "",
      });
      navigate("/add-income");
    } else {
      toast.dismiss(toastId);
      toast.error(data.message, {
        duration: 4000,
        position: "top-right",
      });
      navigate("/add-income");
    }
  };
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
                <TextField
                  name="source"
                  value={income.source}
                  onChange={(e) =>
                    setIncome({ ...income, [e.target.name]: e.target.value })
                  }
                  label="Income Source"
                  variant="outlined"
                />
                <TextField
                  name="amount"
                  value={income.amount}
                  onChange={(e) =>
                    setIncome({ ...income, [e.target.name]: e.target.value })
                  }
                  label="Amount"
                  type="number"
                  variant="outlined"
                />

                {/* install this---> npm install @mui/x-date-pickers
                 */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      value={income.date}
                      onChange={(e) =>
                        setIncome({
                          ...income,
                          date: e.$d,
                        })
                      }
                      label="Choose Date"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
              <Stack padding={4}>
                <Button
                  onClick={handleIncomeClick}
                  type="button"
                  variant="contained"
                  color="primary"
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

export default AddIncome;
