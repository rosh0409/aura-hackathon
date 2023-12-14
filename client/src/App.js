import TrackExpense from "./pages/TrackExpense";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Dashboard from "./components/Dashboard";
import Home from "./Home";
import Signup from "./pages/Signup_";
import Login from "./pages/Login_";
import Dashboard from "./components/Dashboard";
// import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";
import AddBudget from "./pages/AddBudget";
import AddIncome from "./pages/AddIncome";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  const isLoggedIn = sessionStorage.getItem("auth");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/dash/*"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          {!sessionStorage.getItem("auth") && (
            <Route exact path={"/signup"} element={<Signup />} />
          )}
          {!sessionStorage.getItem("auth") && (
            <Route exact path={"/signin"} element={<Login />} />
          )}
          <Route
            exact
            path={"/trackExpense"}
            element={
              <ProtectedRoutes>
                <TrackExpense />
              </ProtectedRoutes>
            }
          />
          {/* <Route path={"*"} element={<PageNotFound />} /> */}
          <Route
            path={"/add-budget"}
            element={
              <ProtectedRoutes>
                <AddBudget />
              </ProtectedRoutes>
            }
          />
          <Route
            path={"/add-income"}
            element={
              <ProtectedRoutes>
                <AddIncome />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
