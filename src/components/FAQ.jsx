import React, { useState } from 'react';
import './FAQ.css';
import backgroundImage from '../assets/resumehelp.jpeg'; 

const FAQ = () => {
    

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <><div className='hero-container'>
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
          
          
          <div className="resume-help-section">
                  <div className="card-container">
                      
                     
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/should_a_cv_be_handwritten_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                          <div className="card-content">
                              <h3>Should a CV Be Handwritten or Typed?</h3>
                              <p>Should a CV be handwritten or typed to look professional? Check the opinion of a career expert to understand what’s the current standard of CV writing.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/how_to_make_an_international_cv_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>How to Make an International CV? 11 Steps to Follow</h3>
                              <p>Thinking of getting a job abroad? Learn how to make an international CV from career experts. Follow our tips to write a CV that matches international standards.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/why_is_zety_not_loading_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>Why Is Zety Not Loading? (Troubleshooting Tips)</h3>
                              <p>Is Zety's website or builder not loading? Learn why Zety resume builder isn’t loading and see quick fixes for the most common problems.</p>
                          </div>
                      </div>

                      
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/is_zety_safe_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>Is Zety and Its Resume Builder Safe to Use?</h3>
                              <p>Is Zety safe to use when creating job application documents? Is Zety’s resume builder legit? Learn what makes Zety a safe and trustworthy website.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/is_zety_good_resume_builder_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>Is Zety a Good Resume Builder? (What Makes It Good)</h3>
                              <p>Are you wondering if Zety is a good resume builder? See how Zety can make your job application process easier, and read about the builder’s features.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/moving_sections_in_zety_builder_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>How to Reorder the Resume Sections in Zety’s Builder?</h3>
                              <p>Learn how to move sections of your resume around in Zety’s builder. You can reorder sections of your resume in our builder in a matter of seconds.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/cv_layout_size_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Is the Best Layout Size for a CV?</h3>
                              <p>Learn what’s the best layout size for a CV from career experts. Check what’s the perfect page size and length for any CV before writing your application.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/can_a_fresher_have_a_cv_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>Can a Fresher Have a CV? [Expert’s Advice]</h3>
                              <p>Clear any doubts about preparing a job application. Check this mini guide to learn if a fresher can have a CV, or whether a resume is better instead.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/cv_or_resume_for_lawyers_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>Do Lawyers Use a CV or a Resume? [Multiple Scenarios]</h3>
                              <p>Do lawyers use a CV or a resume when applying for jobs? Check our advice to learn when it’s better to use a lawyer CV or a resume.</p>
                          </div>
                      </div>

                      
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_is_a_latex_cv_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Is a LaTeX CV? [Is It Better Than a Classic CV?]</h3>
                              <p>What is a LaTeX CV? What are the advantages and disadvantages of using LaTeX for CV writing? Check this mini guide to find out all the facts about LaTeX CVs.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/zety_template_on_one_page_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>How to Get a Zety Template to Be One Page?</h3>
                              <p>Some simple formatting tricks will help you make a one-page resume with Zety. Check these tips to help save space and fit your resume template on one page.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/zety_refusing_payment_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>What Do I Do if Zety Is Refusing My Payment?</h3>
                              <p>Trying to purchase a Zety subscription, but your payment is being refused? Don’t worry. Read on to find out what to do if Zety rejects your payment.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/zety_not_printing_resume_right_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>Why Is Zety Not Printing My Resume Right?</h3>
                              <p>Zety may print your resume wrong if your printer settings don’t match the document settings. Check these easy fixes to get your resume printed properly.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/zety_affiliate_program_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>Does Zety Have an Affiliate Program?</h3>
                              <p>Willing to support the Zety brand and earn a commission through an affiliate program? Find out all the details about how to partner with Zety here.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/worked_on_resume_alternative_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>What Is Another Word for “Worked” on a Resume?</h3>
                              <p>Looking for ways to replace “worked” on your resume to make it more impressive for recruiters? We have a whole lot of options and power verb suggestions.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/which_resumes_employers_prefer_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Kind of Resumes Do Employers Prefer?</h3>
                              <p>Not sure what kind of resumes employers prefer these days? We have the stats! Read on to get the top advice on employer resume anticipations.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/which_is_better_cv_resume_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>Which Is Better to Hand Out: CV or Resume?</h3>
                              <p>Trying to decide which is better for you, CV or resume? Let’s see which one works for your particular situation based on what we know about these two documents.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/when_to_remove_jobs_from_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>When Should You Remove Jobs From Your Resume?</h3>
                              <p>Think you should omit some jobs in your resume? Not sure when to remove jobs from a resume and not have it backfire? We know the answer.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_to_do_if_no_experience_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Should I Do if I Have No Experience?</h3>
                              <p>Writing a resume but don’t have experience? Struggling to find examples of professional experience for your entry-level resume? We’ll help.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_should_infographic_resume_include_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>What Should an Infographic Resume Include?</h3>
                              <p>Check the key elements of an infographic resume and learn what should an infographic resume include before you start creating a highly visual job application.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_month_do_companies_hire_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>What Month Do Most Companies Hire In?</h3>
                              <p>Applying for jobs and wishing to know when companies hire the most? Learn which months are the best for job-hunting and when your chances are the highest!</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_is_resume_letterhead_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Is a Letterhead for a Resume?</h3>
                              <p>Not sure what a resume letterhead is and what it should include? Read on to find what a letterhead for a resume looks like and how you can write yours.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_is_fun_resume_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>What Is a Fun Resume?</h3>
                              <p>Wondering what a fun resume is and if you should choose it for your job application? Read on to find out if applying with a fun resume is a good idea.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_is_average_resume_length_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>What Is the Average Length of a Resume?</h3>
                              <p>Wondering what the average resume length is because you want yours to be just right? We know exactly how long your resume should be, based on your experience.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_are_language_levels_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What Are Language Levels: A1, A2, B1, B2, C1, and C2?</h3>
                              <p>Confused by the language levels to use on your resume? Not sure what language levels: A1, A2, B1, B2, C1, and C2 stand for? Find out the answer.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/what_are_four_resume_types_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>What Are the 4 Types of Resumes? (+ Less Popular Types)</h3>
                              <p>What are the four different types of resumes? Our career expert describes the four types of resumes and explains the differences between them.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/usajobs_resume_builder_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>Should You Use USAJOBS Resume Builder?</h3>
                              <p>Not sure if you should use the resume builder provided by USAJOBS? Find out if that’s the best way to go for your resume-writing scenario.</p>
                          </div>
                      </div>

                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/typo_in_cover_letter_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" />
                          <div className="card-content">
                              <h3>What if I Notice a Typo After I Send My Cover Letter?</h3>
                              <p>How crucial are typos in a cover letter? What if you notice you made a typo when your email is already out? Read on to find out how to fix it.</p>
                          </div>
                      </div>
    
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/twelve_core_competencies_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                          <div className="card-content">
                              <h3>What Are the 12 Core Competencies?</h3>
                              <p>Looking for the 12 core competencies to put on your resume to attract recruiters? Here’s a list of core competencies for your application.</p>
                          </div>
                      </div>
                      <div className="card">
                          <img src="https://cdn-images.zety.com/pages/transferring_resumes_between_accounts_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                          <div className="card-content">
                              <h3>Can You Transfer Resumes Between Different Accounts on Zety?</h3>
                              <p>See whether it’s possible to transfer resumes between different accounts on Zety. Learn how to upload a resume from a different Zety account to yours.</p>
                          </div>
                      </div>
                    
    
    
    
                  </div>
              </div>
              
              
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
