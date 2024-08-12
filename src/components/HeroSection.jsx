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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  
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
    <section className="hero-section hero-container">     
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
          {/* 2nd part */}
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


{/* 3rd part */}
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


{/* 4th part */}

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

   


{/* 5th part */}
    
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

      <div className="info-section">
      <div className="info-item">
        <h2>Is Zety safe to use?</h2>
        <p>
          <strong>Yes, Zety is a legit business, you can check it out on the <a href="#">About Zety page</a>.</strong> Every year, our resume maker, guides and examples help millions of job seekers in the world to find their dream jobs. The website and application are safe thanks to a secure SSL https encrypted connection. Your personal data is processed according to stringent policies you can learn more about in the <a href="#">terms of use</a>, <a href="#">privacy policy</a>, and <a href="#">cookie policy</a>.
        </p>
      </div>
      <div className="separator"></div>
      <div className="info-item">
        <h2>Can I contact Zety easily if I need help with my account?</h2>
        <p>
          Our customer happiness agents are available to assist you with any issue you may encounter regarding the website, our applications or your Zety account. From solving problems you might encounter to managing your subscription, we are here to help. <a href="#">Visit our Contact page</a> to know when our call center is open, to send us a message via email or fill a contact form. We will get back to you as soon as possible.
        </p> <div className="separator"></div>
        {isExpanded && (
          <><div className="extra-content">
                <h2>Does Zety have resume examples that I can look at?</h2>
                <p>
                  Zety has more than 500 free resume examples for you to read while making your own resume. All of our examples were written by Certified Professional Resume Writers (CPRW), after extensive research. You can use our resume examples and guides while making your resume with Zety to make the process of resume writing even faster and easier.
                </p>
                <p>
                  While we tried to cover as many professions as possible to ensure you will always find the sample resume you need, there’s a chance that your specific job isn’t on our list. If that’s the case, we encourage you to read our guide on the general resume, where you will learn how to write a more universal document.
                </p>
              </div><div className="separator"></div>
              <div className="extra-content">
                <h2>Can Zety review my resume when I’ve finished making it?</h2>
                <p>
                The Zety Resume Maker includes a very useful and popular feature called Resume Check. Throughout the resume making 
                process, our software will read your document and compare it against all other similar resumes in our database, in
                 real-time. Not only will you know where your resume might be under-optimized, but our resume check tool will also
                  give you a quality score and specific tips on what to improve.
                </p>
                
              </div><div className="separator"></div>
              
              <div className="extra-content">
                <h2>Are resumes made with Zety ATS-friendly?</h2>
                <p>
                All of Zety’s templates, be it for resumes, CVs, or cover letters, are ATS-compliant. You can safely send the resume you’ve made 
                with Zety to any company, anywhere, and the Applicant Tracking Systems will be able to read and understand your documents. 
                If you’re new to that concept, don’t hesitate to read our guide on ATS resume templates and why they are key to a successful job hunt!
                </p>
                
              </div><div className="separator"></div>
              
              <div className="extra-content">
                <h2>Which resume template should I use in 2024?</h2>
                <p>
                Zety only offers Modern Resume Templates. They are all available in dozens of color schemes, and you can customize 
                their structure, fonts, margins, and so on. A resume template should be easy to fill in and real, while eye-catching. 
                At Zety, we have carefully crafted every single of our templates to make sure they match both the recruiters’ and the 
                candidates’ preferences. For more details, read our article describing what a resume should look like in 2024.

                 Every change you make in the resume will automatically adjust the contents of your document for you, so you never have
                  to worry about breaking anything.
                </p>
                
              </div><div className="separator"></div>
              
              <div className="extra-content">
                <h2>Why do I need a different resume for every job application?</h2>
                <p>
                Recruiters and hiring managers typically receive hundreds of applications per day. To filter out all the applications 
                that do not meet their needs, they use application tracking software that eliminates all resumes that are not tailored
                 for specific keywords included in the job ad. But even without ATS apps, they can quickly differentiate a generic
                 resume copy-pasted and sent to every single company around from a resume tailored to their job ad.

                That’s why in your resume, you have to highlight skills and experiences which directly address the company’s needs 
                listed in the job description. To make the cut, you have to send a different resume every time.

                In the Zety online resume maker you can quickly duplicate your resume and adjust it to a specific job title in a few clicks!
                </p>
               
              </div><div className="separator"></div>
              
              <div className="extra-content">
                <h2>Should I download my new resume in PDF or Word?</h2>
                <p>
                With Zety, you can make a resume for free, and download it in the format of your choice. The most common formats 
                for a resume are PDF and Word. Always opt for the PDF resume if you are sending your document right away. It will 
                ensure your resume layout remains intact on any device and software. Download your resume in Word if you want to have 
                a copy of it that you can edit later.

                Note that with your Zety account, you can keep as many copies of your resume as you need online, enabling you to update or edit 
                it for another job application, anytime & anywhere. For more information, read about Word VS PDF resume formats
                </p>
              
              </div><div className="separator"></div>
              
              <div className="extra-content">
                <h2>Do I need a cover letter for my resume?</h2>
                <p>
                Yes, you need a cover letter for your resume. Despite what many candidates believe, a cover letter is still necessary in 2024. 
                In this document, you can elaborate on your skills and work experience listed in the resume. It is the best way to complement your 
                resume and provide details of your achievements and abilities. Besides, attaching a covering letter to your job application is a 
                great sign of your motivation to get the job. Even if you’ve never written one in the past, you can still do it quickly. Read our
                 guide on how to write a cover letter, check our dozens of free cover letter examples, or 
                simply go directly to our cover letter builder.
                </p>
               
              </div><div className="separator"></div></>
        )}
        <button className="toggle-button" onClick={toggleExpand}>
          {isExpanded ? 'See less' : 'See more'}
        </button>
      </div>
    </div>
    </div>

    
    {/* last part */}
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
