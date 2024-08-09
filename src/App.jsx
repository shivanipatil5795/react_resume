import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import HeroSection from './components/HeroSection';
import ResumeBuilder from './components/ResumeBuilder';
import ResumeExamples from './components/ResumeExamples';
import ResumeTemplates from './components/ResumeTemplates';
import Resumecheck from './components/ResumeCheck';
import SelectResume from './components/SelectResume';
import ResumeHelp from './components/ResumeHelp';
import ResumeExample from './components/ResumeExample';
import FAQ from './components/FAQ';
import MediaMentions from './components/MediaMentions';

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
        <Route path="/resumecheck" element={<Resumecheck />} />
        <Route path="/selectresume" element={<SelectResume />} />
        <Route path="/resumehelp" element={<ResumeHelp />} />
        <Route path="/resumeexample" element={<ResumeExample />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mediamentions" element={<MediaMentions />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
