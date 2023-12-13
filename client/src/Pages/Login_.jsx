import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/Sidebar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_ = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSignin = async () => {
    const toastId = toast.loading("Loading...");
    if (user.email && user.password) {
      const { data } = await axios.post("/api/user/signin", user);
      console.log(data);
      if (data.status === "success") {
        toast.dismiss(toastId);
        toast.success(data.message, {
          duration: 4000,
          position: "bottom-right",
        });
        navigate("/dashboard");
      } else {
        toast.dismiss(toastId);
        toast.error(data.message, {
          duration: 4000,
          position: "top-right",
        });
        navigate("/signin");
      }
    } else {
      toast.dismiss(toastId);
      toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "bottom-right",
      });
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <main className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="md:w-2/3 w-screen">
        <h1 className="text-3xl my-12 mx-20">Login</h1>

        {/* User details form */}

        <div className="ml-20">
          <div className="my-4">
            <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              name="email"
              value={user.email}
              variant="outlined"
              className="lg:w-2/4 w-3/4"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              type="password"
              label="Password"
              name="password"
              value={user.password}
              variant="outlined"
              className="lg:w-2/4 w-3/4"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="my-10">
            <button
              className="text-lg bg-lime-300 px-4 py-1 rounded-md"
              onClick={handleSignin}
            >
              Signin
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login_;
