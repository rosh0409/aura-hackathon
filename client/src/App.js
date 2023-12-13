// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './pages/Signup_';
// import Login from './pages/Login_';
import TrackExpense from './pages/TrackExpense';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup_";
import Login from "./pages/Login_";
import Dashboard  from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
      <Dashboard/>
        <Routes>

          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Login />} /> 
          <Route exact path={"/trackExpense"}element={<TrackExpense/>}/>
          <Route exact path={"/dashboard"}element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
