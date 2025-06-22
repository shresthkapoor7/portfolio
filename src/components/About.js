import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import shreshthImage from "../images/shresth.jpg";
import "../about.css";

function About({ showBlogs, setShowBlogs }) {
  const name = "Shresth Kapoor";
  const title = "MS in Computer Science ";
  const paragraphs = [
    "I build web, mobile, and AI applications that are reliable, useful, and user-focused. I enjoy working on projects that are both technically challenging and meaningful.",

    "Previously I was a Software Engineer at <a href=\"https://talenttitan.com/\" target=\"_blank\" rel=\"noopener noreferrer\">TalentTitan</a>, I worked as a full-stack developer during a company rebrand. I cleaned up legacy code, improved performance, and contributed across both frontend and backend systems. I also led efforts to improve code quality using SonarQube and other tools.",

    "Recently, I've been working on AI workflows, including a Retrieval-Augmented Generation (RAG) system for Obsidian. I enjoy exploring new technologies and often take on side projects to learn and build.",

    "In my free time, I'm working on building StrandsChat - a threaded AI conversation interface at <a href=\"https://strandschat.com\" target=\"_blank\" rel=\"noopener noreferrer\">strandschat.com</a>. It's a space to experiment with context management, multi-turn memory, and AI interaction design."
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
            <strong>{title}<span style={{ color: '#57068B' }}>@<a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#57068B', textDecoration: 'none' }}>New York University</a></span></strong>
          </p>
          {paragraphs.map((para, index) => (
            <p key={index} className="updated-links" style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <div className="cta-buttons">
            <a
              href="#"
              className="cta-box"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("shresthkapoor7@gmail.com").then(() => {
                  alert("Email copied to clipboard!");
                });
              }}
            >
              <span role="img" aria-label="email">📨</span>
              <span className="cta-box-text">Get in touch</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1Gz0Hkkq71m8NEFlYLCsMxa33I-yW7Ni2/view"
              className="cta-box"
            >
              <span role="img" aria-label="resume">📄</span>
              <span className="cta-box-text">Download Resume</span>
            </a>

            <div
              className="cta-box"
              onClick={() => setShowBlogs(!showBlogs)}
            >
              <span className="cta-box-text">
                Home
              </span>
              <div
                style={{
                  width: "48px",
                  height: "24px",
                  backgroundColor: showBlogs ? "#38bdf8" : "#e5e7eb",
                  borderRadius: "12px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    transform: showBlogs ? "translateX(24px)" : "translateX(0px)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                  }}
                />
              </div>
              <span className="cta-box-text">
                Blogs
              </span>
            </div>
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