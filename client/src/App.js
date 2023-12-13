import TrackExpense from "./pages/TrackExpense";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Dashboard from "./components/Dashboard";
import Home from "./Home";
import Signup from "./pages/Signup_";
import Login from "./pages/Login_";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";
import AddBudget from "./pages/AddBudget";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Routes> */}
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Login />} />
          {isLoggedIn && (
            <Route exact path={"/trackExpense"} element={<TrackExpense />} />
          )}
          <Route path={"/*"} element={<PageNotFound />} />
          <Route path={"/add-budget"} element={<AddBudget />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
