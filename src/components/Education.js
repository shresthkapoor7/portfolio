import React from 'react';

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>

      <div className="edu-box">
        <div className="edu-entry">
          <div className="edu-header">
            <div className="edu-title">
              <h3>Master of Science in Computer Science</h3>
              <p className="edu-subtitle">New York University, Tandon School of Engineering</p>
            </div>
            <div className="edu-location">
              New York, NY
              <div className="edu-date">Sept 2024 – May 2026</div>
            </div>
          </div>
          <p>
            <strong>GPA:</strong> 3.667/4.0
          </p>
          <p>
            <strong>Relevant Courses:</strong> Artificial Intelligence, Human Computer Interaction, Programming
            Languages, Machine Learning, Design and Analysis of Algorithms, Operating Systems.
          </p>
        </div>

        <div className="edu-entry">
          <div className="edu-header">
            <div className="edu-title">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p className="edu-subtitle">SRM Institute of Science and Technology</p>
            </div>
            <div className="edu-location">
              Chennai, India
              <div className="edu-date">June 2019 – May 2023</div>
            </div>
          </div>
          <p>
            <strong>GPA:</strong> 9.23/10.0
          </p>
          <p>
            <strong>Relevant Courses:</strong> High Performance Computing, Natural Language Processing, Building Applications Using Open Source
            AR/VR SDKs, Network Routing Algorithms, Data Mining And Analytics, Database Management Systems
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;