import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BikePage from './pages/BikePage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bikes/:id" element={<BikePage />} />
    </Routes>
  );
}

export default App;
