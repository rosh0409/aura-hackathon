import React, { useState } from "react";
import "../App.css";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Radio, { radioClasses } from "@mui/material/Radio";
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
import { NavLink, useNavigate } from "react-router-dom";
import defaultavatar from "../assets/default-avatar.png";
axios.defaults.baseURL = "http://localhost:8000";

const Signup_ = () => {
  let active;
  let navigate = useNavigate();
  const [file, setFile] = useState();
  const [input, setInput] = useState();
  const profInput = () =>{
    return(<> 
      <div className="my-4">
        <KeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
        <TextField
          label="Profession"
          name="Profession"
          value={user.profession}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          variant="outlined"
          className="w-4/5"
        />
      </div></>)
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confPass: "",
    accType: "",
    profession:"",
    profile: new File([], ""),
  });
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };

  const handleSignup = async () => {
    const toastId = toast.loading("Loading...");
    if (
      user.name &&
      user.email &&
      user.password &&
      user.confPass &&
      user.gender &&
      user.profile
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
            const formdata = new FormData();
            formdata.append("profile", user.profile);
            formdata.append("name", user.name);
            formdata.append("email", user.email);
            formdata.append("password", user.password);
            formdata.append("confPass", user.confPass);
            formdata.append("gender", user.gender);

            const { data } = await axios.post("/api/user/signup", formdata, {
              headers: { "Content-Type": "multipart/form-data" },
            });
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
    <main className="flex overflow-x-hidden">
      <Sidebar />
      <div className="lg:w-2/3 w-screen flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="text-3xl text-center mt-12 mb-4 mx-4">
            Sign up
            <hr className="bg-red-600 border-2" />
          </h1>
        </div>

        {/* User details form */}

        <div className="logo-s">
          <div>
            <label className="l" htmlFor="profile">
              <img
                className="user_img"
                src={file ? file : defaultavatar}
                alt=""
                style={{ alignSelf: "center" }}
              />
            </label>
            <input
              className="file"
              accept="image/*"
              id="profile"
              name="profile"
              type="file"
              onChange={onUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <p>Click to add profile</p>
        <div className="w-2/4">
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
              className="w-4/5"
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
              className="w-4/5"
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
              className="w-4/5"
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
              className="w-4/5"
            />
            <p className="text-gray-600 text-xs mt-1">
              Must contain 1 uppercase letter, 1 number, min. 8 characters.
            </p>
            <a href="/signin" className="text-blue-700 underline">
              Already have an account? Login
            </a>
          </div>
          <FormControl className="flex">
            <FormLabel className="">Are you a</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="acctype"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              sx={{ display: "inline" }}
            >
              <FormControlLabel
                id="user"
                value="user"
                control={<Radio size="small" />}
                label="User"
                onClick={() => setInput(false)}
              />
              <FormControlLabel
                id="profesional"
                value="Profesional"
                control={<Radio size="small" />}
                label="Profesional"
                onClick={() => setInput(profInput)}
              />
            </RadioGroup>
          </FormControl>
          {input}
          <div className="my-8 flex justify-center">
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
