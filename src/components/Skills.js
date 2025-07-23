import React, { useState, useEffect } from 'react';

function Skills() {
  const categories = [
    { id: 'frameworks', label: 'Frameworks', icon: '🧱' },
    { id: 'software', label: 'Software', icon: '💻' },
    { id: 'expertise', label: 'Expertise', icon: '🎯' },
    { id: 'language', label: 'Programming Languages', icon: '🌐' },
  ];

  const skills = [
    // Frameworks
    { id: 'skill1', label: 'AngularJS', category: 'frameworks' },
    { id: 'skill2', label: 'ReactJS', category: 'frameworks' },
    { id: 'skill3', label: 'ExpressJS', category: 'frameworks' },
    { id: 'skill4', label: 'Spring Boot', category: 'frameworks' },
    { id: 'skill5', label: 'Flutter', category: 'frameworks' },
    { id: 'skill6', label: 'SwiftUI', category: 'frameworks' },
    { id: 'skill7', label: '.NET', category: 'frameworks' },
    { id: 'skill8', label: 'NextJS', category: 'frameworks' },

    // Software
    { id: 'skill9', label: 'Git', category: 'software' },
    { id: 'skill10', label: 'Docker', category: 'software' },
    { id: 'skill11', label: 'AWS', category: 'software' },
    { id: 'skill12', label: 'Supabase', category: 'software' },
    { id: 'skill13', label: 'Firebase', category: 'software' },
    { id: 'skill14', label: 'Jira', category: 'software' },
    { id: 'skill15', label: 'DBeaver', category: 'software' },
    { id: 'skill16', label: 'Postman', category: 'software' },
    { id: 'skill17', label: 'LambdaTest', category: 'software' },
    { id: 'skill18', label: 'SonarQube', category: 'software' },
    { id: 'skill19', label: 'VS Code', category: 'software' },
    { id: 'skill20', label: 'XCode', category: 'software' },

    // Expertise
    { id: 'skill21', label: 'UI/UX Design', category: 'expertise' },
    { id: 'skill22', label: 'Cross-Browser Testing', category: 'expertise' },
    { id: 'skill23', label: 'Code Quality (SonarQube)', category: 'expertise' },
    { id: 'skill24', label: 'Content Automation', category: 'expertise' },
    { id: 'skill25', label: 'LLM Integration', category: 'expertise' },
    { id: 'skill26', label: 'RAG', category: 'expertise' },

    // Programming Languages
    { id: 'skill27', label: 'JavaScript / TypeScript', category: 'language' },
    { id: 'skill28', label: 'Python', category: 'language' },
    { id: 'skill29', label: 'Java', category: 'language' },
    { id: 'skill30', label: 'C++ / C', category: 'language' },
    { id: 'skill31', label: 'SQL', category: 'language' },
    { id: 'skill32', label: 'HTML/CSS', category: 'language' },
    { id: 'skill33', label: 'C#', category: 'language' },
  ];

  const [activeCategory, setActiveCategory] = useState('frameworks');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skill-categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="icon">{category.icon}</span> {category.label}
          </button>
        ))}
      </div>

      <hr className="skills-divider" />

      <div className="skills-grid">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="skill-item">
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;