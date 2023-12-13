import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Sidebar from "../components/Sidebar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Signup = () => {
  const [details, setDetails] = useState({
    name:"",
    email:"",
    gender:"",
    password:"",
    cpassword:""
  })
  const handleOnChange = (e)=>{
    
  }
  return (
    <main className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="lg:w-2/3 w-screen">
        <h1 className="text-3xl my-12 lg:mx-20 mx-12">Sign up</h1>

        {/* User details form */}

        <div className="lg:ml-20 ml-12">
          <div className="my-4">
            <Person2OutlinedIcon
              sx={{ color: "action.active", mr: 1, my: 2 }}
            />
            <TextField
              id="input-with-sx"
              label="Name"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
              onChange={handleOnChange}
            />
          </div>
          <div className="my-4">
            <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
            />
          </div>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{display:'inline'}}
            >
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <div className="my-4">
            <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
            />
          </div>
          <div className="my-4">
            <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
            />
          </div>
          <div className="my-8">
            <button className="text-lg bg-lime-300 px-4 py-1 rounded-md">Signup</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
