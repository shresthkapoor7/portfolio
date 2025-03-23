import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cameBack = localStorage.getItem('fromPortfolioProject');
    if (cameBack === 'true') {
      setShowPopup(true);
      localStorage.removeItem('fromPortfolioProject');
    }
  }, []);

  return (
    <div className="app">
      <div className="container">
        {showPopup && (
          <div
            style={{
              background: '#fef9c3',
              border: '1px solid #fde047',
              padding: '1rem',
              margin: '1rem 0',
              borderRadius: '8px',
              color: '#92400e',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            🌀 <strong>Recursion detected!</strong> You clicked the Portfolio from inside the Portfolio.
          </div>
        )}

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