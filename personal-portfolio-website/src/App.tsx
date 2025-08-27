import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div style={{color: 'orange', fontWeight: 'bold', fontSize: '2rem'}}>DEBUG: No route matched</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;