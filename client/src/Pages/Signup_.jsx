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
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:8000";

const Signup_ = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confPass: "",
  });

  const handleSignup = async () => {
    const toastId = toast.loading("Loading...");
    if (
      user.name &&
      user.email &&
      user.password &&
      user.confPass &&
      user.gender
    ) {
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
      if (user.password === user.confPass) {
        if (user.password.length >= 8 && user.password.length <= 15) {
          if (
            /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])/.test(user.password)
          ) {
            const { data } = await axios.post("/api/user/signup", user);
            if (data.status === "success") {
              toast.dismiss(toastId);
              toast.success(data.message, {
                duration: 4000,
                position: "bottom-right",
              });
              navigate("/signin");
            } else {
              toast.dismiss(toastId);
              toast.error(data.message, {
                duration: 4000,
                position: "top-right",
              });
              navigate("/signup");
            }
          } else {
            toast.dismiss(toastId);
            toast.error(
              "Password must contain 1 capital letter and 1 number :-( ",
              {
                duration: 2000,
                position: "bottom-right",
              }
            );
          }
        } else {
          toast.dismiss(toastId);
          toast.error(
            "Password length must be greater than 8 and less than 15 :-( ",
            {
              duration: 2000,
              position: "bottom-right",
            }
          );
        }
      } else {
        toast.dismiss(toastId);
        toast.error("Password and Confirm Password does not match :-( ", {
          duration: 2000,
          position: "bottom-right",
        });
      }
    } else {
      toast.dismiss(toastId);
      toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "bottom-right",
      });
    }
    setUser({
      name: "",
      email: "",
      password: "",
      confPass: "",
    });
  };
  return (
    <main className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="lg:w-2/3 w-screen">
        <h1 className="text-3xl my-12 mx-20">Sign up</h1>

        {/* User details form */}

        <div className="ml-20">
          <div className="my-4">
            <Person2OutlinedIcon
              sx={{ color: "action.active", mr: 1, my: 2 }}
            />
            <TextField
              id="input-with-sx"
              label="Name"
              name="name"
              value={user.name}
              variant="outlined"
              className="lg:w-2/4 w-3/4"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              variant="outlined"
              className="lg:w-2/4 w-3/4"
            />
          </div>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="gender"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              sx={{ display: "inline" }}
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
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              variant="outlined"
              className="lg:w-2/4 w-3/4"
            />
          </div>
          <div className="my-4">
            <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField
              type="password"
              label="Confirm Password"
              name="confPass"
              value={user.confPass}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              variant="outlined"
              className="lg:w-2/4 w-3/4"
            />
          </div>
          <div className="my-8">
            <button
              onClick={handleSignup}
              className="text-lg bg-lime-300 px-4 py-1 rounded-md"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup_;
