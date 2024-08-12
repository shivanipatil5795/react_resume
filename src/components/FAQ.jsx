import React, { useState } from 'react';
import './FAQ.css';
import backgroundImage from '../assets/resumehelp.jpeg'; 

const FAQ = () => {
    
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
      setShowMore(!showMore);
    };

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <><div className='hero-container'>
            {/* 1st section */}
        <div className="resume-help">
              <div className="content-help">
                  <h1 className="title">Frequently Asked Questions</h1>
                  <p className="description">
                  We've got answers for all the questions you may have to make the best resume, CV or cover letter, to ace an interview and more. Zety is your go-to Career FAQ.
                  </p>
              </div>
              <div className="image-container">
                  <img src={backgroundImage} alt="Resume Help Background" />
              </div>
          </div>
    
    {/* 2nd section */}
          <div className="header">
          <div className="logos">
            <span className="logo">theguardian</span>
            <span className="logo">HUFFPOST</span>
            <span className="logo">lifehacker</span>
            <span className="logo">business.com</span>
            <span className="logo">FINANCIAL TIMES</span>
            <span className="logo">Forbes</span>
          </div>
          <div className="links">
            <span>Blog categories:</span>
            <span>All Articles</span>
            <span>Job Search</span>
            <span>Job Interviews</span>
            <span>Career Advice</span>
            <span>Resume Help</span>
            <span>CV Help</span>
            <span>Cover Letter Help</span>
            <span>FAQ</span>
          </div>
        </div>
          
          
       {/* 3rd section */}
            <div className="faq-container">
        <h1>Frequently Asked Questions about ATS Resume Checker</h1>
        <div className="faq-section">
          <h2>What is a resume check?</h2>
          <p>
            A resume check is online software that scans your resume and instructs how to improve your resume. 
            Some of these tools come with a resume builder, like ours, so you can choose one that both crafts and 
            updates your already made resume. You may need to buy a small fee or subscribe to the free trials.
            Our resume checker will automatically scan your document to look for mistakes and opportunities 
            and compare your application to others in their database. You'll find out what resume sections and 
            keywords need work. The resume review is free if you decide to make a resume with our builder.
          </p>
        </div>
        <hr className="faq-divider" />
        <div className="faq-section">
          <h2>What is the best ATS resume checker?</h2>
          <p>
            The best resume review services are:
            <ul>
              <li>Zety</li>
              <li>LiveCareer</li>
              <li>Resume Worded</li>
              <li>Jobscan</li>
              <li>ZipJob</li>
              <li>Kickresume</li>
              <li>CakeResume</li>
              <li>Enhancv</li>
              <li>ResumeGo</li>
              <li>BeamJobs</li>
            </ul>
            If you'd like to know more about the best online resume builders or resume writing services, head over to our resources.
          </p>
        </div>
        <hr className="faq-divider" />
        <div className="faq-section">
          <h2>How can I check my resume score for free?</h2>
          <p>
            To access our free resume critique services, use our builder to create your resume. Our resume writers 
            have designed 18 professional resume templates customized to fit your needs. You can also upload your 
            own resume to be formatted crisply and still make your resume stand out with our resume checker.
          </p>
        </div>
        <hr className="faq-divider" />
        <div className="faq-section">
          <h2>How do I scan my resume for keywords?</h2>
          <p>
            When you have access to our resume software, upload your resume or simply select the one you've just 
            crafted with the help of our free resume builder. The software will automatically detect the best 
            keywords for your resume. If this is not already your field of expertise, our resume builder suggests 
            the top job descriptions listing the top keywords that the recruiter should find in your resume.
          </p>
        </div>
        <hr className="faq-divider" />
        {showMore && (
          <>
            <div className="faq-section">
              <h2>What is a resume score?</h2>
              <p>
                You receive a resume score once the Resume Worded scanner checks the contents of your resume with those of the job description. 
                You can also get it from a resume review tool that scans your resume for necessary information and crafted sections.
              </p>
            </div>
            <hr className="faq-divider" />
            <div className="faq-section">
              <h2>What is a good ATS score for a resume?</h2>
              <p>
                80%.<br />
                A resume must meet this threshold to pass the ATS something. If you don’t know what an ATS is, you can get advice on ATS friendly resumes. 
                If you have less than 80%, your resume might not be picked up by bots. To make sure you hit this score, check out our best resume templates and pick one.
                Then, you'll only have to worry about hitting the right keywords.
              </p>
            </div>
            <hr className="faq-divider" />
            <div className="faq-section">
              <h2>Is a resume review worth it?</h2>
              <p>
                Yes.<br />
                You may not even realize how much having an ATS compliant resume matters. Basically, your job depends on it. 
                And this is because your resume will land at a recruiter’s desk that will filter the software passes it and gives you the green light. 
                Tools like our resume checker can help you with your resume that does not look like the above ones.
                Besides, even if the company doesn’t use any software, they’ll still just hire someone that has the best resume, 
                and having a great resume score ensures yours is among the best.
              </p>
            </div>
            <hr className="faq-divider" />
          </>
        )}
        <button className="see-more-button" onClick={handleToggle}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
  
  
      

     {/* last section */}
              <div className="subscription-form">
          <h2>Don't miss out on exclusive stories that will supercharge your career!</h2>
          <p>Get a weekly dose of inspiration delivered to your inbox</p>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Your e-mail" required />
              <button type="submit">Join 1,000,000+ subscribers</button>
            </div>
            <p className="error-message">Must be a valid e-mail address.</p>
          </form>
        </div>
        </div>
              </>
    );
};

export default FAQ;
