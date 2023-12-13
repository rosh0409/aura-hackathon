import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/Sidebar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Login = () => {
    const [details, setDetails] = useState({
        email:"",
        password:""
    })
  return (
    <main className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="lg:w-2/3 w-screen">
        <h1 className="text-3xl my-12 lg:mx-20 mx-12">Login</h1>

        {/* User details form */}

        <div className="lg:ml-20 ml-12">
          <div className="my-4">
            <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
              onChange={(e) =>
                setDetails({ ...details, [e.target.email]: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              className="lg:w-2/4 w-4/5"
              onChange={(e) =>
                setDetails({ ...details, [e.target.password]: e.target.value })
              }
            />

          </div>
          <div className="my-10">
            <button className="text-lg bg-lime-300 px-4 py-1 rounded-md">Signup</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
