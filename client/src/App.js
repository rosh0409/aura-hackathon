import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
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
