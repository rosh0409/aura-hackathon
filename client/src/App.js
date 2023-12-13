import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import TrackExpense from './pages/TrackExpense';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/signup"}element={<Signup/>}/>
        <Route exact path={"/login"}element={<Login/>}/>
        <Route exact path={"/trackexpense"}element={<TrackExpense/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
