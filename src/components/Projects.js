import React, { useState } from "react";

function Projects() {
  const projects = [
    {
      id: "project1",
      title: "Strands - LLM + Threads 🔥 (Work in Progress)",
      description:
      "Instead of a flat, endless chat history, Strands lets you naturally branch conversations, ask follow-up questions, explore alternative ideas without ever losing the flow.",
      category: "featured",
      tag: "React · Express · AWS EC2 · TypeScript · OpenRouter/Gemini · PostgreSQL",
      url: "https://www.strandschat.com/",
      image: "/images/projects/strands.jpg",
    },
    {
      id: "project2",
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "A system that answers ROS-related queries using data scraping, embedding, and retrieval from sources like GitHub and Medium in a Dockerized environment.",
      category: "featured",
      tag: "Python · Docker · MongoDB · Qdrant",
      url: "https://github.com/krishmurjani/cs-gy-6613-final-project",
      image: "/images/projects/rag.jpg",
    },
    {
      id: "project3",
      title: "Snapple – Scan your food",
      description:
        "Mobile app with camera-based food recognition that offers personalized health advice and workout suggestions based on dietary impact.",
      category: "featured",
      tag: "Mobile · Flutter",
      url: "https://github.com/shresthkapoor7/snapple",
      image: "/images/projects/snapple.jpg",
    },
    {
      id: "project4",
      title: "ALATS: Terrestrial Surveillance Bot",
      description:
        "Published IEEE paper. Developed a bot for autonomous navigation and intruder detection using OpenCV, YOLO, and MobileNet SSD on Raspberry Pi.",
      category: "paper",
      tag: "Research · IEEE",
      url: "https://ieeexplore.ieee.org/document/10234740",
      image: "/images/projects/alats.jpg",
    },
    {
      id: "project5",
      title: "Portfolio",
      description:
        "The very site you're browsing right now - designed and built from scratch to showcase my skills, and projects. Click the project card for special recursion message.",
      category: "featured",
      tag: "React · Vercel",
      url: "/",
      image: "/images/projects/portfolio.jpg",
    },
    {
      id: "project6",
      title: "TrackMate – Career Fair Job Tracker",
      description:
      "Web app that helps students at career fairs quickly save job listings by scanning QR codes or pasting links. Built with Firebase Auth & Firestore.",
      category: "featured",
      tag: "React · Firebase · QR Scanner",
      url: "https://shresthkapoor7.github.io/careerfair-tracker/",
      image: "/images/projects/trackmate.jpg",
    },
    {
      id: "project7",
      title: "AgroSynth x Reboot The Earth Hackathon",
      description:
      "AgroSynth Weather Intelligence is an open-source platform for agriculture and communities, offering real-time weather data, user alerts, AI forecasts, and interactive maps in a sleek, responsive web app.",
      category: "featured",
      tag: "React · Supabase · OpenRouter · React Leaflet",
      url: "https://shresthkapoor7.github.io/agrosynth/",
      image: "/images/projects/agrosynth.jpg",
    },
    {
      id: "project8",
      title: "Σpace",
      description:
      "Personal dev notebook, built with NextJS to track my learnings and projects.",
      category: "featured",
      tag: "NextJS · Vercel · TypeScript",
      url: "https://shresth.space",
      image: "/images/projects/space.jpg",
    }
  ];

  const [activeCategory, setActiveCategory] = useState("featured");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-categories">
        <button
          className={`category-btn ${
            activeCategory === "featured" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("featured")}
        >
          <span className="icon">⭐</span> Featured
        </button>
        <button
          className={`category-btn ${
            activeCategory === "paper" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("paper")}
        >
          <span className="icon">📄</span> Publication
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <a
          key={project.id}
          href={project.url}
          target={project.id === "project5" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          onClick={() => {
            if (project.id === "project5") {
              localStorage.setItem("fromPortfolioProject", "true");
            }
          }}
          className={`project-card ${project.id === "project1" ? "highlight" : ""}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tag">{project.tag}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;