import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SideNav from './components/SideNav';
import Feed from './components/Feed';
import Dashboard from './components/Dashboard';

function App() {
  return (
<>
  <Router>
   <Dashboard/>
  </Router>
  </>
  );
}

export default App;
