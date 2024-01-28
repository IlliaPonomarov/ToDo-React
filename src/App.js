import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import MainNavbar from "./components/MainNavbar";
function App() {
  return (
   <Router>
       <MainNavbar />
        <div>

        </div>
   </Router>
  );
}

export default App;
