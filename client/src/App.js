// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './pages/Signup_';
// import Login from './pages/Login_';
import TrackExpense from "./pages/TrackExpense";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup_";
import Login from "./pages/Login_";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Login />} />
          <Route exact path={"/trackExpense"} element={<TrackExpense />} />
          
        </Routes><Dashboard/>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
