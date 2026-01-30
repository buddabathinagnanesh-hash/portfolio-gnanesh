import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal App Development Project',
      subtitle: 'REAL-WORLD APP DEVELOPMENT BASICS',
      impact: 'Applied mobile dev fundamentals',
      challenge: 'Understanding the fundamentals of real-world mobile app development, including user flow, basic data handling, and practical problem-solving through a personal application idea.',
      outcome: 'Built a basic Android application using Kotlin that focuses on real-world app concepts such as screen navigation, user input handling, and clean, maintainable code structure.',
      tech: ['Kotlin', 'Android Basics', 'UI Components', 'Logical Flow'],
      featured: true,
    },
    {
      id: 2,
      title: 'Python Automation Scripts',
      subtitle: 'Efficiency Tools',
      impact: 'Automated repetitive tasks',
      challenge: 'Reducing manual effort in daily data processing and system tasks.',
      outcome: 'Created reliable python scripts to automate workflows, increasing efficiency and reducing errors.',
      tech: ['Python', 'Automation', 'Scripting'],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="section">
      <SectionHeader
        title="Featured Work"
        subtitle="Projects selected to demonstrate impact, problem-solving, and technical depth"
      />

      <div className="project-grid">
        {projects.map((project, idx) => (
          <Card
            key={project.id}
            variant={project.featured ? 'featured' : 'project'}
            className={project.featured ? 'project-featured' : ''}
          >
            <div className="card-accent"></div>
            <div className="project-header">
              <div className="project-meta">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
              </div>
              <span className="project-impact">{project.impact}</span>
            </div>

            <div className="project-content">
              <div className="project-item">
                <h4 className="project-label">Challenge</h4>
                <p>{project.challenge}</p>
              </div>
              <div className="project-item">
                <h4 className="project-label">Outcome</h4>
                <p>{project.outcome}</p>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="#" className="action-link" aria-label="View project details">Details</a>
                <a href="#" className="action-link" aria-label="View source code">Code</a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
