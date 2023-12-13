import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/Sidebar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";

const Login_ = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSignin = async () => {
    const toastId = toast.loading("Loading...");
    if (user.email && user.password) {
      if (
        // eslint-disable-next-line
        !/^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/.test(
          user.email
        )
      ) {
        toast.dismiss(toastId);
        setUser({ ...user, email: "" });
        return toast.error("please enter a valid email", {
          duration: 4000,
          position: "top-right",
        });
      }
      const { data } = await axios.post("/api/user/signin", user);
      console.log(data);
      if (data.status === "success") {
        toast.dismiss(toastId);
        toast.success(data.message, {
          duration: 4000,
          position: "bottom-right",
        });
        disptach(authActions.login());
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
    <main className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <div className="w-screen flex flex-col items-center">
        <h1 className="text-3xl my-12 mx-20">Login</h1>

        {/* User details form */}

        <div className="lg:w-2/4 w-3/4">
          <div className="my-4">
            <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              name="email"
              value={user.email}
              variant="outlined"
              className="w-3/4"
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
              className="w-3/4"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="my-10 flex justify-center">
            <button
              className="text-lg bg-lime-300 px-4 py-1  rounded-md"
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
