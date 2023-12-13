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
  );
}

export default App;
