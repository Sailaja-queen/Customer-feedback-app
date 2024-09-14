import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import SurveyScreen from './Components/SurveyScreen';
import ThankYouScreen from './Components/ThankYouScreen';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/survey" element={<SurveyScreen />} />
        <Route path="/thank-you" element={<ThankYouScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
