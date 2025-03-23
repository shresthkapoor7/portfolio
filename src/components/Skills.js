import React, { useState } from 'react';

function Skills() {
    const categories = [
        { id: 'software', label: 'Software', icon: '💻' },
        { id: 'expertise', label: 'Expertise', icon: '🎯' },
        { id: 'language', label: 'Language', icon: '🌐' },
        { id: 'familiar', label: 'Familiar', icon: '🧠' },
      ];

      const skills = [
        // Software
        { id: 'skill2', label: 'Angular', category: 'software' },
        { id: 'skill3', label: 'Spring Boot', category: 'software' },
        { id: 'skill4', label: 'Flutter', category: 'software' },
        { id: 'skill5', label: 'Git', category: 'software' },
        { id: 'skill6', label: 'Jira', category: 'software' },
        { id: 'skill7', label: 'DBeaver', category: 'software' },
        { id: 'skill8', label: 'Postman', category: 'software' },
        { id: 'skill9', label: 'LambdaTest', category: 'software' },

        // Expertise
        { id: 'skill10', label: 'UI/UX Design', category: 'expertise' },
        { id: 'skill11', label: 'Cross-Browser Testing', category: 'expertise' },
        { id: 'skill12', label: 'Code Quality (SonarQube)', category: 'expertise' },
        { id: 'skill13', label: 'Content Automation', category: 'expertise' },

        // Language
        { id: 'skill14', label: 'JavaScript / TypeScript', category: 'language' },
        { id: 'skill15', label: 'Python', category: 'language' },
        { id: 'skill16', label: 'Java', category: 'language' },
        { id: 'skill17', label: 'C++ / C', category: 'language' },
        { id: 'skill18', label: 'SQL', category: 'language' },
        { id: 'skill19', label: 'HTML/CSS', category: 'language' },

        // Familiar
        { id: 'skill20', label: 'React', category: 'familiar' },
        { id: 'skill21', label: 'C#', category: 'familiar' },
        { id: 'skill22', label: '.NET', category: 'familiar' },
      ];

  const [activeCategory, setActiveCategory] = useState('software');

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