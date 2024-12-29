import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/context';
import Dashboard from './components/Dashboard';
import Cocomo from './components/Cocomo';

function App() {
  return (
    <Router>  {/* Wrap your entire app inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/cocomo" element={<Cocomo/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
