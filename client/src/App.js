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
import AddIncome from "./pages/AddIncome";

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  const isLoggedIn = sessionStorage.getItem("auth");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          {isLoggedIn && <Route exact path="/dash/*" element={<Dashboard />} />}
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Login />} />
          {isLoggedIn && (
            <Route exact path={"/trackExpense"} element={<TrackExpense />} />
          )}
          <Route path={"/*"} element={<PageNotFound />} />
          {isLoggedIn && <Route path={"/add-budget"} element={<AddBudget />} />}
          {isLoggedIn && <Route path={"/add-income"} element={<AddIncome />} />}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
