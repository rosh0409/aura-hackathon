import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Login_ from "./Pages/Login_";
import Signup_ from "./Pages/Signup_";

import { Dashboard } from "@mui/icons-material";
// import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
      <Dashboard/>
        <Routes>
          <Route exact path={"/signup"} element={<Signup_ />} />
          <Route exact path={"/signin"} element={<Login_ />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
