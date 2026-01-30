import React from 'react'

const Hero = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-intro">Hi, I'm <span className="highlight-name">Gnanesh Buddabathina</span></span>
          <h1 className="hero-title">Frontend Developer specializing in React and modern UI/UX</h1>
          <p className="hero-subtitle">Focusing on performance, accessibility, and scalability.</p>
          <p className="hero-desc">
            I create web experiences that users love and developers maintain. Dedicated to writing clean code,
            optimizing performance, and building products that solve real problems.
          </p>

          <div className="cta-buttons">
            <button
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              download="Gnanesh_Buddabathina_Resume.pdf"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-box"></div>
          <div className="accent-circle accent-1"></div>
          <div className="accent-circle accent-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
