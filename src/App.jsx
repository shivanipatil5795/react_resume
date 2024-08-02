import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import HeroSection from './components/HeroSection';
import ResumeBuilder from './components/ResumeBuilder';
import ResumeExamples from './components/ResumeExamples';
import ResumeTemplates from './components/ResumeTemplates';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-examples" element={<ResumeExamples />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
