import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'HTML', icon: '�' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'Python', icon: '🐍' },
        { name: 'App Development', icon: '📱' },
      ],
    },
    {
      title: 'Professional Skills',
      skills: [
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Teamwork', icon: '🤝' },
        { name: 'English Communication', icon: '📢' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'English', icon: '🇺🇸' },
        { name: 'Telugu (తెలుగు)', icon: '🗣️' },
        { name: 'Hindi', icon: '🇮🇳' },
      ],
    },
  ]

  return (
    <section id="skills" className="section">
      <SectionHeader
        title="Capabilities"
        subtitle="A focused set of modern skills refined through real projects"
      />

      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <Card
                  key={i}
                  variant="skill"
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
