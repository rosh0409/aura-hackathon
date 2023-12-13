<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/signup"} element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
=======
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/signup"}element={<Signup/>}/>
        <Route exact path={"/login"}element={<Login/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 78624360acf1a356f677b81368562a78b5d9ad26
  );
}

export default App;
