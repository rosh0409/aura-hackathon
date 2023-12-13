import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
      <Dashboard/>
        <Routes>
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
