import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import shreshthImage from "../images/shresth.jpg";

function About() {
  const name = "Shresth Kapoor";
  const title = "MS in Computer Science @ NYU";
  const description =
    "I'm a graduate student passionate about software engineering and AI. I enjoy building meaningful web and mobile applications that make a real difference.";
  const additionalInfo =
    "Previously, I worked as a Software Engineer at TalentTitan, where I improved system performance and led full-stack development. I'm always exploring new ideas, whether it’s through academic projects or real-world solutions.";

  return (
    <section className="about">
      <div className="about-content" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div className="about-text" style={{ flex: 1 }}>
          <h2>Hello, I'm {name}.</h2>
          <p><strong>{title}</strong></p>
          <p>{description}</p>
          <p>{additionalInfo}</p>

          <div className="cta-buttons" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <a
              href="mailto:shresthkapoor7@gmail.com"
              className="cta-button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <span role="img" aria-label="email">📨</span>
              <span style={{ textDecoration: "underline" }}>Get in touch</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1xb9JRVuZlKd4x8dcKZmtXG_rPaZmExtX/view?usp=sharing"
              className="cta-button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <span role="img" aria-label="resume">📄</span>
              <span style={{ textDecoration: "underline" }}>Download Resume</span>
            </a>
          </div>
        </div>

        <div
  className="about-image"
  style={{
    flex: "0 0 250px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  }}
>
  <img
    src={shreshthImage}
    alt="Shresth Kapoor"
    style={{
      width: "220px",
      height: "220px",
      borderRadius: "10%",
      objectFit: "cover",
    }}
  />

        <div
            style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            }}
        >
            <a href="https://twitter.com/shresthkapoor7" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://www.linkedin.com/in/shresthkapoor7" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0077B5" />
            </a>
            <a href="https://github.com/shresthkapoor7" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color="#333" />
            </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;