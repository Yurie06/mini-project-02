import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Gallery from './Pages/Gallery';


function App() {
  return (
    <div>
      <Gallery />
    </div>
  
  );
}


export default App;
