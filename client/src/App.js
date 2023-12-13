import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup_';
import Login from './pages/Login_';
import TrackExpense from './pages/TrackExpense';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/signup"}element={<Signup/>}/>
        <Route exact path={"/login"}element={<Login/>}/>
        <Route exact path={"/trackExpense"}element={<TrackExpense/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
