

import React from 'react';

const Projects = () => {
  return (
    <div className="page-content">
      <div className="code-block">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">ProfessionalExperience</span> {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">2</span>
          <span className="comment">    // Work Experience</span>
        </div>
        <div className="code-line">
          <span className="line-number">3</span>
        </div>
        <div className="code-line">
          <span className="line-number">4</span>
          <span className="comment">    /// &lt;summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">5</span>
          <span className="comment">    /// Full-Stack Developer & IT Consultant</span>
        </div>
        <div className="code-line">
          <span className="line-number">6</span>
          <span className="comment">    /// Self-Employed | 2018 - Present</span>
        </div>
        <div className="code-line">
          <span className="line-number">7</span>
          <span className="comment">    /// &lt;/summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">8</span>
          <span className="keyword">    public</span> <span className="class-name">Experience</span> <span className="identifier">FullStackDeveloper</span> = <span className="keyword">new</span> <span className="class-name">Experience</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">9</span>
          <span className="property-name">        Company</span> = <span className="string">"Self-Employed"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">10</span>
          <span className="property-name">        Position</span> = <span className="string">"Full-Stack Developer & IT Consultant"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">11</span>
          <span className="property-name">        Duration</span> = <span className="string">"2018 - Present"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">12</span>
          <span className="property-name">        Responsibilities</span> = <span className="keyword">new</span> <span className="class-name">string[]</span> {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">13</span>
          <span className="string">            "Developed and maintained full-stack web applications using modern JavaScript frameworks",</span>
        </div>
        <div className="code-line">
          <span className="line-number">14</span>
          <span className="string">            "Designed and implemented RESTful APIs and microservices",</span>
        </div>
        <div className="code-line">
          <span className="line-number">15</span>
          <span className="string">            "Collaborated with clients to gather requirements and deliver customized solutions",</span>
        </div>
        <div className="code-line">
          <span className="line-number">16</span>
          <span className="string">            "Optimized application performance and implemented security best practices"</span>
        </div>
        <div className="code-line">
          <span className="line-number">17</span>
          {'    }'}
        </div>
        <div className="code-line">
          <span className="line-number">18</span>
          {'};'}
        </div>
        <div className="code-line">
          <span className="line-number">19</span>
        </div>
        <div className="code-line">
          <span className="line-number">20</span>
          <span className="comment">    // Education</span>
        </div>
        <div className="code-line">
          <span className="line-number">21</span>
          <span className="keyword">    public</span> <span className="class-name">Education</span> <span className="identifier">UniversityDegree</span> = <span className="keyword">new</span> <span className="class-name">Education</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">22</span>
          <span className="property-name">        Institution</span> = <span className="string">"National and Kapodistrian University of Athens"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">23</span>
          <span className="property-name">        Degree</span> = <span className="string">"Bachelor of Science in Computer Science"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">24</span>
          <span className="property-name">        Duration</span> = <span className="string">"2010 - 2014"</span>
        </div>
        <div className="code-line">
          <span className="line-number">25</span>
          {'};'}
        </div>
        <div className="code-line">
          <span className="line-number">26</span>
          {'}'}
        </div>
      </div>
    </div>
  );
};

export default Projects;
