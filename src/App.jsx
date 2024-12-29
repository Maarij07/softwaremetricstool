import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/context';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>  {/* Wrap your entire app inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
