import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.redirect;
    if (redirectPath) {
      sessionStorage.removeItem("redirect");
      const relativePath = redirectPath.replace(window.location.origin, "");
      navigate(relativePath);
    }
  }, [navigate]);

  return null;
}

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showBlogs, setShowBlogs] = useState(false);

  const funMessages = [
    "🦁 Lion doesn't concern himself with git commands. He just --force.",
    "💡 Idea: Let's ship my machine to the users",
    "🧠 You've already lost 20 seconds to this message. Might as well lose few more by trying out the portfolio project.",
    "🚨 Alert: Recruiter spotted. Act cool, pretend everything's fully tested.",
    "💸 Plan B: If this doesn't work out, there's always OnlyFans and tech rants.",
    "😭 Tip: If you don't know what you're doing, try throwing hash-maps at the question",
    "📦 Status: Works on my machine. Good luck out there."
  ];

  const initialBlogPosts = [
    {
      id: 1,
      title: "GitHub Pages to Vercel: What Happened",
      date: "2025-06-22",
      excerpt: "I've been using GitHub Pages for a while now, but I've been wanting to try out Vercel for a while now. So I decided to move my portfolio to Vercel. This is a guide/rant on how I did it.",
      readTime: "7 min read",
      tags: ["Github Pages", "React", "Vercel"],
      content: ""
    }
  ];

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  useEffect(() => {
    const fetchBlogContent = async () => {
      console.log('Starting to fetch blog content...');

      const updatedPosts = await Promise.all(
        initialBlogPosts.map(async (post) => {
          try {
            const response = await fetch(`${process.env.PUBLIC_URL}/blogs/${post.id}.md`);
            if (response.ok) {
              const content = await response.text();
              return { ...post, content };
            } else {
              console.error(`Failed to fetch content for blog ${post.id}. Status: ${response.status}`);
              return post;
            }
          } catch (error) {
            console.error(`Error fetching content for blog ${post.id}:`, error);
            return post;
          }
        })
      );

      console.log('Setting updated blog posts:', updatedPosts);
      setBlogPosts(updatedPosts);
    };

    fetchBlogContent();
  }, []); // Empty dependency array is fine here since we're using initialBlogPosts directly

  function getBannerStyle(message, isPopup) {
    const defaultStyle = {
      background: "#e0f2fe",
      border: "1px solid #38bdf8",
      color: "#0369a1",
    };

    const popupStyle = {
      background: "#fef9c3",
      border: "1px solid #fde047",
      color: "#92400e",
    };

    const stalkerStyle = {
      background: "#fee2e2",
      border: "1px solid #f87171",
      color: "#b91c1c",
    };

    if (isPopup) return popupStyle;
    if (message.includes("Alert")) return stalkerStyle;
    return defaultStyle;
  }

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const cameBack = localStorage.getItem("fromPortfolioProject");
    if (cameBack === "true") {
      setShowPopup(true);
      timeoutId = setTimeout(() => {
        localStorage.removeItem("fromPortfolioProject");
        setShowPopup(false);
        setMessageIndex(0);
      }, 10000);
    }

    intervalId = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funMessages.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const currentMessage = funMessages[messageIndex];
  const { background, border, color } = getBannerStyle(currentMessage, showPopup);

  const HomePage = () => (
    <div className="app">
      <div className="container">
        <div
          style={{
            background,
            border,
            color,
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "8px",
            fontWeight: "500",
            textAlign: "center",
            transition: "all 0.3s ease",
            minHeight: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {showPopup ? (
            <>
              <span role="img" aria-label="spiral">🌀</span>
              <span>
                <strong>Recursion detected!</strong> Welcome to the void. There's no `return` here.
              </span>
            </>
          ) : (
            <span>{currentMessage}</span>
          )}
        </div>

        <About showBlogs={showBlogs} setShowBlogs={setShowBlogs} />

        {showBlogs ? (
          <Blogs blogPosts={blogPosts} />
        ) : (
          <div>
            <Skills />
            <Projects />
            <Experience />
            <Education />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<BlogPost blogPosts={blogPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;