import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resumeImage from '../assets/Screenshot_30-7-2024_103532_zety.png';
import resumeImage1 from '../assets/Screenshot_30-7-2024_11015_zety.com2.png.jpeg';
import resumeImage2 from '../assets/Screenshot_30-7-2024_11144_zety.com3.png.jpeg';
import resumeImage3 from '../assets/Screenshot_30-7-2024_111651_zety.com4.jpeg';
import resumeImage4 from '../assets/Screenshot_30-7-2024_111743_zety.com5.jpeg';
import resumeImage5 from '../assets/Screenshot_30-7-2024_112241_zety.com6.jpeg';
import resumeImage6 from '../assets/re_eg.jpeg';
import resumeImage7 from '../assets/eg.jpeg';
import resumeImage8 from '../assets/temp.jpeg';
import './HeroSection.css';

const HeroSection = () => {
  
  const navigate = useNavigate(); 


  const handleButtonClick = () => {
    navigate('/resume-builder');
  };

 
  const handleButtonClick1 = () => {
    navigate('/resume-examples');
  };

  const handleButtonClick2 = () => {
    navigate('/resume-templates');
  };
 

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="hero-section">



     
    <h2>How Can We Help You?</h2>
      <div className="features">
          <div className="feature">
            <img src={resumeImage} alt="Cutting Edge Career Tools" />
            <div className="text-content">
              <h3>Resume Builder</h3>
              <p>Zety’s resume builder will save you time and provide expert tips every step of the way. Creating a resume has never been easier.</p>
            </div>
          </div>
          <div className="feature">
            <img src={resumeImage1} alt="Extensive Experience" />
            <div className="text-content">
              <h3>Cover Letter Builder</h3>
              <p>Smoothly generate a job-winning cover letter with our drag-and-drop interface.</p>
            </div>
          </div>
          <div className="feature">
            <img src={resumeImage2} alt="Expert-Crafted Guides and Examples" />
            <div className="text-content">
              <h3>ATS-Friendly Resume Templates</h3>
              <p>Grab recruiters’ attention with one of 18 professional resume templates designed by career experts.</p>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <img src={resumeImage3} alt="Cutting Edge Career Tools" />
            <div className="text-content">
              <h3>Free Career Advice Resources</h3>
              <p>Consciously shape your career with helpful guides and resume examples. Writing the perfect job application? Asking for a raise? Learn it all (and more) on our blog.</p>
            </div>
          </div>
          <div className="feature">
            <img src={resumeImage4} alt="Extensive Experience" />
            <div className="text-content">
              <h3>Resume Check</h3>
              <p>Score and check your resume in real-time with our resume checker. Get actionable tips to improve your resume.</p>
            </div>
          </div>
          <div className="feature">
            <img src={resumeImage5} alt="Expert-Crafted Guides and Examples" />
            <div className="text-content">
              <h3>Ready-Made Content Suggestions</h3>
              <p>Discover expert-crafted content suggestions and create a professional job application in minutes.</p>
            </div>
          </div>
        </div>

<br></br><br></br>

      <div className="main-section">
    <div className="template-section">
      <div className="template-content">
        <img src={resumeImage6} alt="Icon" className="template-icon" />
        <div className="template-text">
          <h2 className="template-title">Browse through 600+ free resume examples</h2>
          <p className="template-description">
          Get inspired and make your resume shine!
          </p>
        </div>
      </div>
      <button className="template-button" onClick={handleButtonClick1}>Check All Resume Examples</button>
    </div>

    <br></br>


    </div>
      <div className="row content">
        <div className="col-lg-6 text-left">
          <h2>Try Our Easy-To-Use Resume Builder</h2>
          <p>
            Experience our intuitive resume builder and take a shortcut to your dream career.
            Discover why thousands of job seekers and HR experts trust us. Create your best
            resume quickly and easily today.
          </p>
          <button className="build-resume-button" onClick={handleButtonClick}>Build Your Resume Now</button>
        </div>
        <div className="col-lg-6">
          <img src={resumeImage7} alt="Resume Examples" className="resume-image" />
        </div>
      </div>
    <br></br>

    <div className="template-section">
      <div className="template-content">
        <img src={resumeImage8} alt="Icon" className="template-icon" />
        <div className="template-text">
          <h2 className="template-title">Find the perfect template</h2>
          <p className="template-description">
            Discover our resume templates and pick the one that suits your needs.
          </p>
        </div>
      </div>
    
      <button className="template-button" onClick={handleButtonClick2}>See All Resume Templates</button>
    </div>

   


    
    <div className="faq-section">
      <h2>Frequently Asked Questions about Zety’s Website and Builder</h2><br></br>
      <h4>Why is Zety the best website to prepare a job application?</h4><br></br>
      <p><strong>Zety is the best website to build a professional resume and generate a convincing cover letter quickly and easily.</strong> By using Zety, you can benefit from all these advantages:</p>
      <ul>
        <li><strong>Feature-rich</strong> <a href="/resume-builder">Resume Builder</a> with <a href="/resume-templates">professional resume templates</a> for any job.</li>
        <li><a href="#">CV maker</a> with <a href="#">professional CV templates</a> for academic applications.</li>
        <li><a href="#">Cover letter builder</a> with matching <a href="#">cover letter templates</a> and text generator to save time.</li>
        <li>A resume upload feature to  <a href="#">update your old resume</a> instead of starting from scratch.</li>
        <li>Built-in content & suggestions <strong>tailored to your profession and job history.</strong></li>
        <li>Real-time <a href="#">resume score checker</a> with actionable improvement tips.</li>
        <li><strong>Multiple formats</strong> to download your resume as: PDF, Word, and TXT.</li>
        <li> <strong>Printing documents</strong>directly from the app in US letter format or A4 format.</li>
        <li><strong>Cloud storage</strong> with unlimited number of documents to edit, duplicate or update.</li>
        <li><strong>Free resume making</strong>, with a <strong>14-day trial</strong> without feature restrictions.</li>
        <li>Want to see how it compares against other apps? See <a href="/resume-builder">this ranking of the best resume builders available online</a>.</li>
      </ul>
      <hr />

      <h3>How do I use Zety Resume Builder effectively?</h3><br></br>
      <p>To make your resume online with Zety, follow these easy steps:</p>
      <ul>
        <li><strong>Select the template</strong> that best suits your profession and personality.</li>
        <li><strong>Upload your previous resume</strong>, or choose to <strong>create a brand new resume</strong>.</li>
        <li>Fill in the basic <a href="#">contact information</a> <strong>fields</strong>, as well as your <a href="#">resume headline</a>.</li>
        <li>Pick the <a href="#">best resume format</a> for your needs. We recommend the <a href="#">chronological resume format</a>, but depending on your career path, you may need to consider the <a href="/functionalresume">functional resume</a>, the <a href="/Skillsbasedresume">skills-based resume</a>, or the <a href="/combinationresume">combination resume</a>.</li>
        <li>Write an eye-catching <a href="#">resume summary</a> (or a <a href="#">resume objective</a> if you’re writing a <a href="#">resume with no experience</a>).</li>
        <li><strong>Describe your</strong><a href="#"> work history on your resume</a>, from newest to oldest jobs.</li>
        <li><strong>List your top skills</strong>, and rate them when needed. Check <a href="#">how to put your skills on a resume here</a>.</li>
        <li><strong>Put your</strong> <a href="#">education on your resume</a>, with details if you’re an entry-level candidate.</li>
        <li>Add as much relevant <strong>additional information</strong> as possible. These can be <a href="#">achievements</a>, <a href="#">internships</a>, <a href="#">volunteer work</a>, <a href="#">hobbies and interests</a>, <a href="#">certifications</a>, <a href="#">computer skills</a>, <a href="#">language skills</a> or <a href="#">publications</a>.</li>
      </ul>
      <p>Most of those <a href="#">resume sections</a> are mandatory, but some are optional (remember that <a href="#">your resume should be one-page long</a>, ideally!).</p>
      <p>Be sure to read our article on <a href="#">what to put on a resume</a> to get useful tips while making your resume with Zety, or check out <a href="#">how to write a resume, step by step</a>.</p>
      <hr />

    <div className="zety-info-container">
      
      

<button className="toggle-button" onClick={toggleExpanded}>
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
    </div>

    
    <div className="transform-career-container">
      <h2 className="headline">
        Transform your career today and<br /> join thousands of satisfied users
      </h2>
      <div className="underline"></div>
      <button className="cta-button" onClick={handleButtonClick}>Try Our Resume Maker</button>
    </div>
    

   
    </section>
    
  );
};

export default HeroSection;
