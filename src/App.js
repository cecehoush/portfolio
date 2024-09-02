import React from 'react';
import './App.css';
import HomePage from './screens/home/HomePage';
import Portfolio from './screens/Portfolio';
import Roadmap from './screens/roadmap/Roadmap';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;