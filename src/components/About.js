import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import shreshthImage from "../images/shresth.jpg";

function About() {
  const name = "Shresth Kapoor";
  const title = "MS in Computer Science ";
  const paragraphs = [
    "I build apps that don't crash (mostly) and features people (me being the primary user) actually use. Web, mobile, AI — if it's interesting and slightly chaotic, I'm in.",

    "At TalentTitan, I led full-stack development during a rebrand, cleaned up legacy code like it owed me money, and turned SonarQube red into green like it was a personal vendetta. Frontend to backend — no untouched files.",

    "Lately I've been hacking on AI workflows, building a RAG system for Obsidian, and trying not to accidentally ship a full product during a weekend side quest. Half my commits start with 'quick fix' and end up being entire rewrites.",

    "When I'm not deep in terminal tabs, I'm probably customizing my dotfiles, switching tech stacks for fun, or tweeting hot takes about Spotify, Vim, and being haunted by my own Git history."
  ];
  const additionalInfo =
    "Previously, I worked as a Software Engineer at TalentTitan, where I improved system performance and led full-stack development. I'm always exploring new ideas, whether it's through academic projects or real-world solutions.";

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
            <p key={index}>{para}</p>
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
