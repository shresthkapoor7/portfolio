import React from 'react';

function Experience() {
  return (
    <section className="education">
      <h2>Experience</h2>

      <div className="edu-box">
        <div className="edu-entry">
          <div className="edu-header">
            <h3>Software Engineer, TalentTitan</h3>
            <div className="edu-location">
              Gurugram · India <br />
              <span className="edu-date">Jul 2023 – Aug 2024</span>
            </div>
          </div>
          <p className="edu-subtitle">
            <em>Full-time Role</em>
          </p>
          <p>
            • Led Spring and Java upgrades, improving tech stack compatibility and reducing transition time by 25%.<br />
            • Implemented a CDN and optimized load times from 40–50s to 10s on low-speed networks.<br />
            • Automated daily generation of 100+ web pages using Python and OpenAI API, boosting content ops efficiency.
          </p>
        </div>

        <div className="edu-entry">
          <div className="edu-header">
            <h3>Developer Intern, TalentTitan</h3>
            <div className="edu-location">
              Gurugram · India <br />
              <span className="edu-date">Jan 2023 – Jun 2023</span>
            </div>
          </div>
          <p className="edu-subtitle">
            <em>Internship</em>
          </p>
          <p>
            • Built Angular components and integrated them with Spring Boot REST APIs.<br />
            • Enhanced UX during company rebranding and ensured cross-browser compatibility using LambdaTest.<br />
            • Conducted SonarQube analysis and resolved critical code quality and memory issues across 10 services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;