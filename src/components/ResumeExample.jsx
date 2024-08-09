import React, { useState } from 'react';
import "./ResumeExample.css"; // We'll add this CSS file next

const ResumeExample = () => {

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
      };
  return (
    <div className='hero-container'>
    <section className="resume-formats">
      <h2>Examples of Resume Formats</h2>
      <div className="resume-examples">
        <div className="resume-item">
          <img src="https://cdn-images.zety.com/images/zety/landings/examples/resume-examples-reverse-chronological@3x.png" alt="Reverse-chronological Resume" />
          <h3>Reverse-chronological Resume</h3>
          <p>
            Highlight your experience and key professional achievements with this resume format. 
            List your latest position at the top and the previous ones follow.
          </p>
        </div>
        <div className="resume-item">
          <img src="https://cdn-images.zety.com/images/zety/landings/examples/resume-examples-functional@3x.png" alt="Functional Resume" />
          <h3>Functional Resume</h3>
          <p>
            If you lack experience relevant to a specific position, use this resume example. 
            Focus on your key skills and target them to the position.
          </p>
        </div>
        <div className="resume-item">
          <img src="https://cdn-images.zety.com/images/zety/landings/examples/resume-examples-combination@3x.png" alt="Combination Resume" />
          <h3>Combination Resume</h3>
          <p>
            A hybrid resume lets you highlight your best skills in a creative way and gives you space 
            to present your work history.
          </p>
        </div>
      </div>

      <div className="faq-container">
      <h1>Frequently Asked Questions about Resume Examples</h1>
      <div className="faq-section">
        <h2>Should I use a resume example or not?</h2>
        <p>
        By using a ready-made resume example written by career and Human Resources experts, you can be sure your resume will meet the
         current HR standards. If you choose not to use a resume sample, you will waste a lot of time writing a resume on your own – 
         while you could use this time to write a cover letter, or prepare for the job interview instead. You also risk making mistakes
          on your resume that can kill your chances of getting that job.
        </p>
      </div>
      <hr className="faq-divider" />
      <div className="faq-section">
        <h2>Are these the best resume examples for 2024?</h2>
        <p>
        All of our 500+ free resume examples were written by Certified Professional Resume Writers, who have extensive experience in 
        creating resumes for candidates from all industries and career paths. Each guide provides a professional resume sample along 
        with a set of tips & practical examples to help you make your own resume with ease, for any job title or position. To help you
         win the job, your resume must also look good and have a proper format, so we strongly advise you to also pick a professional
          resume template you can quickly fill in online and download in PDF or DOC.
        </p>
      </div>
      <hr className="faq-divider" />
      <div className="faq-section">
        <h2>How do I adjust these resume examples to my needs?</h2>
        <p>
        When copying a resume sample for your job application, all you need to do is pay attention to the contact,
         work experience, and education details. If you have different skills than those included in the resume example, be sure to 
         replace them and list your skills on your resume the right way. The more complex your job history is, the more you'll need 
         to adjust the resume sample. While you can keep most of the information from our ready resume examples, we encourage you to 
         read our guide on all resume sections, so that you can be sure all parts of your resume have the right information presented in the right way.
        </p>
      </div>
      <hr className="faq-divider" />
      <div className="faq-section">
        <h2>What to do if I can't find a resume example for my application?</h2>
        <p>
        While we've done our best to cover nearly all possible jobs and industries with our resume samples listed on this page, we are
        aware that some candidates may not find the perfect match. In such cases, you can either pick a resume sample targeting a 
        similar job in the same industry, or go with a general resume sample that can serve all job application purposes. Alternatively,
         you can go directly to our online resume builder that features built-in resume content for thousands of jobs, or start 
         entirely from scratch with our article on how to write a resume.
        </p>
      </div>
      <hr className="faq-divider" />
      {showMore && (
        <>
          <div className="faq-section">
            <h2>Is it OK to use the same resume example for every application?</h2>
            <p>
            Sending the same generic resume to all companies is a huge no-no. Recruiters and hiring managers will spot it immediately, 
            and it will significantly lower your chances of getting a job interview invite. We strongly recommend that you tailor your resume
             to every application. Note that in our online resume builder, 
            you can easily duplicate your resumes, adjust them, and store them in the cloud for as long as you need.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>Can I use a resume example in the Zety Resume Builder?</h2>
            <p>
            You can use our examples directly in our resume builder by selecting a resume template, and filling in all the required sections
             in the online app. Our wizard will guide you through all the steps of the resume creation process. Inside the Zety resume app, 
             you will find expert tips and ready-made content tailored to the job title and industry you've selected. Once you're done, you 
             will be able to download your resume in PDF or Word. 
            If you're in doubt as to which file type to use, read our guide on the PDF VS Word resume format.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>What is the best resume format for 2024?</h2>
            <p>
            The best resume format to use in 2024 for nearly every job application is the reverse- chronological resume format. It 
            allows recruiters to skim through your work and education history in the order that matters most to them: from your most recent 
            professional experience to your oldest jobs. But there are several other formats that you may find suited to your career or 
            objective, such as the functional resume format or the skills-based resume format. 
            If you're confused which format will work best for you, read our guide on all resume formats and when to use them.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>How long should my resume be?</h2>
            <p>
            Your resume should be one-page long, but in specific situations it is still acceptable to have two-page resumes (read more on 
            the ideal resume length here). On average, candidates with fewer than 5 years of experience shouldn't need more than one page for 
            their resumes. If you happen to need more room, pick a two-column resume template – that will increase the amount of information 
            you can display. If you have more experience and can't sum it up on one page, a two-page resume template is perfectly fine.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>What should my resume look like in 2024?</h2>
            <p>
            To get you hired in 2024, your resume should look professional, modern and simple. The first step toward success is using a 
            resume template that will look good and be ATS-scannable. This way, you can be sure your resume is easy to parse and read,
             even when recruiters are in a hurry. You should always pay attention to the readability and appearance of your resume, and make 
             sure to highlight the content that matters. Be sure to read our guide on what a resume should look like to help you get the job.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>Are these resume examples free?</h2>
            <p>
            All our resume examples are free to use, copy, and paste. You can check as many samples as you need to end up with a perfect
             resume for yourself. If you're building your resume inside our online app, 
            you can create as many resumes for free as you want, and pay to download them only when you're satisfied with the result.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>Do you also have cover letter examples?</h2>
            <p>
            Apart from sample resumes, at Zety you will find hundreds of free cover letter examples for all jobs and industries. 
            Just like with our resumes, you can easily copy and adjust the cover letter samples to your needs. Covering letters significantly 
            boost your chances of getting hired, and are always a great sign of your motivation for hiring managers (read more on the topic of 
            the importance of cover letters here).Check out the best cover letter format, as the rules are different from the resume formats.
            </p>
          </div>
          <hr className="faq-divider" />
          <div className="faq-section">
            <h2>Should my resume example and my cover letter match?</h2>
            <p>
            Yes, your resume and your cover letter should match, both in content and appearance. Matching content means that your
             resume should list your skills and job history, while your cover letter should explain how your employer will benefit from
              hiring you. Matching appearance means that your resume and cover letter templates should look
             alike and are tailored to that specific job application. Check out professional cover letter templates here.
            </p>
          </div>
          <hr className="faq-divider" />
          
        </>
      )}
      <button className="see-more-button" onClick={handleToggle}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>


    <div className="cta-container">
      <h1>Try Zety's professional resume builder now</h1>
      <button className="cta-button">Choose Your Resume Template</button>
    </div>
    </section>
    </div>
  );
};

export default ResumeExample;
