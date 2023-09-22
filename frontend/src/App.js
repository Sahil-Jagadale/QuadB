import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top10Data from './Components/TopTen';
import { MainPage } from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Specify the component to render */}
        <Route path="/" element={<MainPage />} />
        <Route path="/top" element={<Top10Data />} />
      </Routes>
    </Router>
  );
}

export default App;
