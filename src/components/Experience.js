import React from 'react';

function Experience() {
  return (
    <section className="education">
      <h2>Experience</h2>

      <div className="edu-box">
        <div className="edu-entry">
          <div className="edu-header">
            <div className="edu-title">
              <h3>Software Engineer</h3>
              <p className="edu-subtitle">TalentTitan • Full-time</p>
            </div>
            <div className="edu-location">
              Gurugram, India
              <div className="edu-date">Jul 2023 – Aug 2024</div>
            </div>
          </div>
          <ul>
            <li>
              <strong>Led Spring and Java upgrades</strong> for a 25% faster transition to the latest technology versions, addressing compatibility issues and enhancing the tech stack upgrade initiative across the development team.
            </li>
            <li>
              <strong>Increased website load speeds</strong> on slow-speed internet by identifying root causes, proposing solutions, and implementing a CDN for an essential component - reducing load times from 40–50 seconds to just 10 seconds.
            </li>
            <li>
              <strong>Created Python scripts leveraging the OpenAI API</strong>, automating the generation of 100+ web pages per day and streamlining content creation processes.
            </li>
          </ul>
        </div>

        <div className="edu-entry">
          <div className="edu-header">
            <div className="edu-title">
              <h3>Developer Intern</h3>
              <p className="edu-subtitle">TalentTitan • Internship</p>
            </div>
            <div className="edu-location">
              Gurugram, India
              <div className="edu-date">Jan 2023 – Jun 2023</div>
            </div>
          </div>
          <ul>
            <li>
              <strong>Built and maintained Angular components and services</strong>, integrating them with <strong>Spring Boot REST APIs</strong> to build a seamless web application.
            </li>
            <li>
              <strong>Enhanced user experience (UX)</strong> during company rebranding, collaborating with QA to identify and resolve cross-browser issues using <strong>LambdaTest</strong>.
            </li>
            <li>
              <strong>Automated code quality assessments</strong> by conducting <strong>SonarQube analyses</strong> across 10 services, resolving complex code quality issues and memory leaks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;