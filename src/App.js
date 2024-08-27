import React from 'react';
import './App.css';
import HomePage from './screens/home/HomePage';
import Portfolio from './screens/Portfolio';
import Roadmap from './screens/Roadmap';
import Nej from './screens/Nej';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/nej" element={<Nej />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;