import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Login_ from "./pages/Login_";
import Signup_ from "./pages/Signup_";
import Dashboard from "./components/Dashboard";
import Home from "./Home";
// import { Dashboard } from "@mui/icons-material";
// import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route exact path={"/signup"} element={<Signup_ />} />
          <Route exact path={"/signin"} element={<Login_ />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
