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
  );
}

export default App;
