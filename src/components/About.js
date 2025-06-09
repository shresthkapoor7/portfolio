import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import shreshthImage from "../images/shresth.jpg";

function About() {
  const name = "Shresth Kapoor";
  const title = "MS in Computer Science ";
  const paragraphs = [
    "I build web, mobile, and AI applications that are reliable, useful, and user-focused. I enjoy working on projects that are both technically challenging and meaningful.",

    "Previously I was a Software Engineer at TalentTitan, I worked as a full-stack developer during a company rebrand. I cleaned up legacy code, improved performance, and contributed across both frontend and backend systems. I also led efforts to improve code quality using SonarQube and other tools.",

    "Recently, I’ve been working on AI workflows, including a Retrieval-Augmented Generation (RAG) system for Obsidian. I enjoy exploring new technologies and often take on side projects to learn and build.",

    "In my free time, I like customizing my development setup, trying out new tech stacks, and improving my skills through personal projects."
  ];

  return (
    <section className="about">
      <div
        className="about-content"
        style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
      >
        <div className="about-text" style={{ flex: 1 }}>
          <h2>Hello, I'm {name}.</h2>
          <p>
            <strong>{title}<span style={{ color: 'purple' }}>@ <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple', textDecoration: 'none' }}>New York University</a></span></strong>
          </p>
          {paragraphs.map((para, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {para}
            </p>
          ))}

          <div
            className="cta-buttons"
            style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
          >
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
              <span role="img" aria-label="email">
                📨
              </span>
              <span style={{ textDecoration: "underline" }}>Get in touch</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1Gz0Hkkq71m8NEFlYLCsMxa33I-yW7Ni2/view"
              className="cta-button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <span role="img" aria-label="resume">
                📄
              </span>
              <span style={{ textDecoration: "underline" }}>
                Download Resume
              </span>
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
              width: "260px",
              height: "260px",
              borderRadius: "7%",
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
            <a
              href="https://twitter.com/shresthkapoor7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/shresth-kapoor-7skp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="black" />
            </a>
            <a
              href="https://github.com/shresthkapoor7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="black" />
            </a>
            <a
              href="https://leetcode.com/u/shresthkapoor7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://leetcode.com/favicon.ico"
                alt="LeetCode"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
