import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const funMessages = [
    "🚨 Stalker: Stalker Alert.",
    "🧠 Fun Fact: This changes every 7 seconds, try out portfolio project for a special message",
    "💡 Idea: Let's ship my machine to the users",
    "🤓 Tip: If you don't know what you're doing, try throwing hash-maps at the question",
    "❤️ Stack : Made with React and Love"
  ];

  // Helper function to determine banner colors
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
    if (message.includes("Stalker")) return stalkerStyle;
    return defaultStyle;
  }

  // Detect recursion entry
  useEffect(() => {
    const cameBack = localStorage.getItem("fromPortfolioProject");
    if (cameBack === "true") {
      setShowPopup(true);
      localStorage.removeItem("fromPortfolioProject");

      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 7000);

      return () => clearTimeout(timeout);
    }
  }, []);

  // Rotate messages if popup is not shown
  useEffect(() => {
    if (!showPopup) {
      const interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % funMessages.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [showPopup, funMessages.length]);

  const currentMessage = funMessages[messageIndex];
  const { background, border, color } = getBannerStyle(currentMessage, showPopup);

  return (
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
                <strong>Recursion detected!</strong> You clicked the Portfolio from inside the Portfolio.
              </span>
            </>
          ) : (
            <span>{currentMessage}</span>
          )}
        </div>

        <Header />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;