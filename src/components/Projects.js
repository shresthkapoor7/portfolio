import React, { useState } from "react";

function Projects() {
  const projects = [
    {
      id: "project1",
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "A system that answers ROS-related queries using data scraping, embedding, and retrieval from sources like GitHub and Medium in a Dockerized environment.",
      category: "featured",
      tag: "Python · Docker · MongoDB · Qdrant",
      url: "https://github.com/krishmurjani/cs-gy-6613-final-project",
    },
    {
      id: "project2",
      title: "Snapple – Scan your food",
      description:
        "Mobile app with camera-based food recognition that offers personalized health advice and workout suggestions based on dietary impact.",
      category: "featured",
      tag: "Mobile · Flutter",
      url: "https://github.com/shresthkapoor7/snapple",
    },
    {
      id: "project3",
      title: "ALATS: Terrestrial Surveillance Bot",
      description:
        "Published IEEE paper. Developed a bot for autonomous navigation and intruder detection using OpenCV, YOLO, and MobileNet SSD on Raspberry Pi.",
      category: "paper",
      tag: "Research · IEEE",
      url: "https://ieeexplore.ieee.org/document/10234740",
    },
    {
      id: "project4",
      title: "Portfolio",
      description:
        "The very site you're browsing right now — designed and built from scratch to showcase my skills, projects, and personality.",
      category: "featured",
      tag: "React · Vite · CSS",
      url: "/",
    },
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
            target={project.url === "/" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={() => {
              if (project.id === "project4") {
                localStorage.setItem("fromPortfolioProject", "true");
              }
            }}
            className="project-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
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