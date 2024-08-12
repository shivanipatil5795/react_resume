// src/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/resume-builder');
  };

  return (
    <div className='hero-container'>
  <section>
    
    <div className="container">
    <h1>Professional Resume & Cover Letter Tools For Any Job</h1>
    <p>Create a job-winning resume in minutes with our easy-to-use builder.</p>
    <button className="resume-builder-button" onClick={handleButtonClick}>Try Our Resume Builder</button><br />
    
    <div className="features">
      <div className="feature">
        <img src="https://png.pngtree.com/png-vector/20190110/ourmid/pngtree-vector-settings-icon-png-image_312584.jpg" alt="Cutting Edge Career Tools" />
        <div className="text-content">
          <h3>Cutting Edge Career Tools</h3>
          <p>Build a matching resume and cover letter with step-by-step guidance and expert tips.</p>
        </div>
      </div>
      <div className="feature">
        <img src="https://i.pinimg.com/originals/b8/05/01/b8050106237eb0d4062b053a211e287e.jpg" alt="Extensive Experience" />
        <div className="text-content">
          <h3>Extensive Experience</h3>
          <p>Use our vast industry expertise to land your dream job faster.</p>
        </div>
      </div>
      <div className="feature">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/correct-search-4665147-3869833.png?f=webp&w=256" alt="Expert-Crafted Guides and Examples" />
        <div className="text-content">
          <h3>Expert-Crafted Guides and Examples</h3>
          <p>Grow your career with our expert blog cited by universities and top media outlets.</p>
        </div>
      </div>
    </div>
    

    {/* 2nd image */}
    <div className={`resume-preview `}>
      <img src="https://cdn-images.zety.com/images/zety/landings/home/hero-desktop@3x.webp" alt="Resume Preview" />
 
    </div>
  </div>
  </section>
  </div>
  
  );
};

export default HomePage;
