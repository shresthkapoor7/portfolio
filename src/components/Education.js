import React from 'react';

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>

      <div className="edu-box">
        <div className="edu-entry">
          <div className="edu-header">
            <h3>New York University, Tandon School of Engineering</h3>
            <div className="edu-location">
              New York · NY <br />
              <span className="edu-date">Sept 2024 – May 2026</span>
            </div>
          </div>
          <p className="edu-subtitle">
            <em>Master of Science in Computer Science</em>
          </p>
          <p>
            <strong>Relevant Courses:</strong> Artificial Intelligence, Human Computer Interaction, Programming
            Languages, Machine Learning, Design and Analysis of Algorithms, Operating Systems.
          </p>
        </div>

        <div className="edu-entry">
          <div className="edu-header">
            <h3>SRM Institute of Science and Technology</h3>
            <div className="edu-location">
              Chennai · India <br />
              <span className="edu-date">June 2019 – May 2023</span>
            </div>
          </div>
          <p className="edu-subtitle">
            <em>Bachelor of Technology in Computer Science</em>
          </p>
          <p>
            <strong>Relevant Courses:</strong> Data Structures and Algorithms, Operating Systems, Computer Networks,
            Software Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;